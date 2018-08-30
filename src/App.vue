<template>
  <v-app>
<router-view></router-view>
</v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Lato', sans-serif;
  text-align: center;
}
</style>
