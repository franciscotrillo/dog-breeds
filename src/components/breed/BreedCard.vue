<template>

<b-card class="breed-card" :title="breed.name" :img-src="image" img-top img-height="120px">
    <div class="d-flex justify-content-between">
        <b-button size="sm" variant="primary" @click="$emit('click-images', breed)">Images</b-button>
        <b-button v-if="breed.subBreeds.length" size="sm" variant="info" @click="$emit('click-sub-breeds', breeds)">
            Sub Breeds
        </b-button>
    </div>
</b-card>

</template>

<script>

import Breed from '@/api/models/Breed'
import breedResource from '@/api/resources/breedResource'

export default {
  name: 'BreedCard',
  props: {
    breed: { type: Breed, required: true }
  },
  async created () {
    // No es lo mas eficiente del mundo, especialmente cuando empiezas a filtrar, pero llevo algo de prisa
    this.image = await breedResource.getRandomBreedImage(this.breed)
  },
  data () {
    return {
      image: null
    }
  }
}

</script>

<style scoped lang="css">

.breed-card {
    width: 200px;
}

</style>
