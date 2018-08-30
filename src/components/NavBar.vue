<template>
 <div class="nav">
    <div class="logo" @click="push({name: 'home'})">Logo</div>
    <div class="navButton"
    @click="push({name: 'cart'})">
      <v-icon class="buttonIcon">shopping_basket</v-icon>
      <p>mój koszyk</p>
    </div>
    <div class="navButton"
    @click="push({name: 'login'})"
    v-if="!$store.state.isUserLoggedIn">
      <v-icon class="buttonIcon">lock</v-icon>
      <p>login</p>
    </div>
    <div class="navButton"
    @click="logout"
    v-if="$store.state.isUserLoggedIn">
      <v-icon class="buttonIcon">power_settings_new</v-icon>
      <p>logout</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    push (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setToken', null)
    }
  }
}
</script>
<style scoped>
.nav {
padding-left:20px;
padding-right:20px;
height:89px;
position:fixed;
z-index: 1;
left:0;
right:0;
background: #FAFAFA;
box-shadow: 0 1px 5px grey;
}
.navButton {
  justify-content: center;
  width:100px;
  height: 100%;
  float: right;
}
.buttonIcon {
  margin-top:18px;
}
.navButton > p {
  text-transform: uppercase;
}
.navButton:hover p {
  text-decoration: underline
}
.logo {
  float:left;
  height:100%;
  line-height: 90px;
  font-size: 50px;
}
.logo:hover {
  cursor: pointer;
}
</style>
