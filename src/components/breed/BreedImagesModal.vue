<template>

<b-modal ref="bModal"
         class="breed-images-modal"
         lazy
         hide-footer
         size="md">
    <template v-slot:modal-header>
        <b-pagination v-model="currentPage"
                      align="center"
                      :total-rows="rows"
                      :per-page="perPage"/>
    </template>
    <div class="image-list">
        <div v-for="(image, index) in images" :key="index" class="py-2">
            <b-img fluid-grow center :src="image"/>
        </div>
    </div>
</b-modal>

</template>

<script>

import { chunk } from 'lodash'
import breedResource from '@/api/resources/breedResource'

export default {
  name: 'BreedImagesModal',
  data () {
    return {
      breed: null,
      chunks: [],
      rows: 0,
      perPage: 0,
      currentPage: 1
    }
  },
  computed: {
    images () {
      return this.chunks[this.currentPage - 1]
    }
  },
  methods: {
    async show (breed) {
      this.breed = breed
      await this.loadImages(breed)
      this.$refs.bModal.show()
    },
    async loadImages (breed) {
      const images = await breedResource.getBreedImages(breed)

      // Simulo la paginación en el front
      this.chunks = chunk(images, 10)
      this.rows = images.length
      this.perPage = 10
      this.currentPage = 1
    }
  }
}

</script>

<style lang="scss">

.breed-images-modal {
    .modal-dialog{
        overflow-y: initial !important
    }

    .modal-body{
        height: 80vh;
        overflow-y: auto;
    }

    .modal-header {
        justify-content: center;
    }
}

</style>
