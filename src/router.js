import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
import BreedIndex from './views/breed/BreedIndex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'breedIndex',
          component: BreedIndex
        }
      ]
    }
  ]
})
