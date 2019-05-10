import axios from 'axios'
import { forEach } from 'lodash'
import Breed from '@/api/models/Breed'

class BreedResource {
  async index () {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all')
    const breeds = []
    forEach(response.data.message, (subBreeds, name) => {
      breeds.push(new Breed(name, subBreeds))
    })
    return breeds
  }

  async getRandomBreedImage (breed) {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed.name}/images/random`)
    return response.data.message
  }

  async getBreedImages (breed) {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed.name}/images`)
    return response.data.message
  }
}

export default new BreedResource()
