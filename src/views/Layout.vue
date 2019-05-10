<template>

<div>
  <nav-bar/>
  <router-view/>
</div>

</template>

<script>

import NavBar from '@/components/NavBar'

export default {
  name: 'Layout',
  components: { NavBar }
}

</script>
