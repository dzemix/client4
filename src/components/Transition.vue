<template>
  <v-layout column v-scroll="onScroll">
    <p class="fuck">asd</p>
<p class="fuck">asd</p>
<p class="fuck">asd</p>
<p class="fuck">asd</p>
<p class="fuck">asd</p>
    <div :class="{
      test: true,
      test2: some,
      test3: some2}">
      {{input}}
      {{offsetTop}}
    </div>
  </v-layout>
</template>
<script>
export default {
  name: 'Transition',
  data () {
    return {
      some: false,
      some2: false,
      input: '',
      offsetTop: 0
    }
  },
  methods: {
    onScroll () {
      if (document.documentElement.scrollTop > 100) {
        this.some = true
      } else {
        this.some = false
      }
      if (window.pageYOffset > 500) {
        this.some2 = true
      } else {
        this.some2 = false
      }
    }
  }
}
</script>
<style scoped>
.test {
  position:fixed;
  top:50%;
  left:50%;
  margin-top:-10vh;
  margin-left:-10vh;
  width:20vh;
  height:20vh;
  background:red;
  z-index: 1;
  transition:left 4s;
}
.test:hover {
  width:30vh;
}
.test2 {
  background: yellow;
}
.fuck {
  height:200px;
  width:100%;
  background:blue;
}
.test3 {
  background:purple;
}
</style>
