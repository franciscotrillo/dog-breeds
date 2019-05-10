<template>

<b-container fluid class="pt-2">
    <b-row>
        <b-col>
            <h3 class="text-center">Breeds</h3>
        </b-col>
    </b-row>
    <b-row class="mb-2">
        <b-col cols="auto" class="mx-auto">
            <b-input placeholder="Search..." v-model="searchQuery"/>
        </b-col>
    </b-row>
    <b-row>
        <b-col v-for="breed in filteredBreeds" :key="breed.name" class="mb-2" cols="12" sm="6" md="4" lg="3" xl="2">
            <breed-card class="mx-auto" :breed="breed" @click-images="showBreedImagesModal"/>
        </b-col>
    </b-row>
    <breed-images-modal ref="breedImagesModal"/>
</b-container>

</template>

<script>

import { filter } from 'lodash'
import breedResource from '@/api/resources/breedResource'
import BreedCard from '@/components/breed/BreedCard'
import BreedImagesModal from '@/components/breed/BreedImagesModal'

export default {
  name: 'BreedIndex',
  components: {
    BreedCard,
    BreedImagesModal
  },
  created () {
    this.loadBreeds()
  },
  data () {
    return {
      breeds: [],
      searchQuery: ''
    }
  },
  computed: {
    filteredBreeds () {
      if (!this.searchQuery) {
        return this.breeds
      }
      return filter(this.breeds, i => {
        return i.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    }
  },
  methods: {
    async loadBreeds () {
      this.breeds = await breedResource.index()
    },
    showBreedImagesModal (breed) {
      this.$refs.breedImagesModal.show(breed)
    }
  }
}

</script>
