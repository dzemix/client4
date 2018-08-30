<template>
  <div>
    <v-navigation-drawer
      fixed
      clipped
      class="grey lighten-4"
      app
    >
  <v-navigation-drawer
        floating
        permanent
        stateless
        value="true"
      >
        <v-list dense>
          <v-list-tile
            v-for="item in navigations"
            :key="item.title"
            @click="navigation(item.title)"
          >
            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-navigation-drawer>
    <v-toolbar color="amber" app clipped-left>
      <span class="title ml-3 mr-5" @click="mainAdmin">Adming Page</span>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <main-component v-if="!target"></main-component>
      <create-product v-if="target === 'create product'"></create-product>
    </v-content>
  </div>
</template>
<script>
import MainComponent from './MainComponent'
import CreateProduct from './CreateProduct'
export default {
  name: 'admin',
  components: {
    MainComponent,
    CreateProduct
  },
  data () {
    return {
      target: '',
      navigations: [
        {title: 'create product', icon: 'add'}
      ]
    }
  },
  methods: {
    navigation (action) {
      this.target = action
    },
    mainAdmin () {
      this.target = ''
    },
    logout () {
      this.$store.dispatch('setAdmin', null)
      this.$store.dispatch('setAdminToken', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
<style scoped>
.v-content {
  margin:0px;
}
.title:hover {
  cursor: pointer;
}
</style>
