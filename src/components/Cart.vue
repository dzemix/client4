<template>
  <div>
    <nav-bar></nav-bar>
    <v-content>
      <v-btn color="success">text</v-btn>
    </v-content>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'cart',
  components: {
    NavBar
  }
}
</script>
<style scoped>
.v-content {
  margin-top:90px;
}
</style>
