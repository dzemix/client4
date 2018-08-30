<template>
  <div>
  <nav-bar></nav-bar>
  <v-content>
    <v-container >
      <v-layout justify-center row wrap reverse>
        <v-flex lg6 md6 xs12 class="box">
          <div class="panel">
            <div class="panelTitle">mam już konto</div>
            <div class="input">
              <v-text-field
              label="Email"
              outline
              v-model="email"
              ></v-text-field>
              <v-text-field
              label="password"
              type="password"
              v-model="password"
              outline
              ></v-text-field>
              <div class="registerButton" @click="login">Zaloguj się</div>
            </div>
          </div>
        </v-flex>
        <v-flex lg6 md6 xs12 class="box">
        <div class="panel">
          <div class="panelTitle">nie mam konta</div>
            <div class="input">
              <v-text-field
              label="Name"
              outline
              v-model="name"
              ></v-text-field>
              <v-text-field
              label="Email"
              outline
              v-model="registerEmail"
              ></v-text-field>
              <v-text-field
              label="password"
              type="password"
              v-model="registerPassword"
              outline
              ></v-text-field>
              <div class="registerButton" @click="register">załóż konto</div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import AuthenticationController from '@/services/AuthenticationController'
export default {
  name: 'login',
  components: {
    NavBar
  },
  data () {
    return {
      name: '',
      email: '',
      registerEmail: '',
      registerPassword: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationController.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setToken', response.data.token)
        this.$router.push({name: 'home'})
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async register () {
      try {
        const response = await AuthenticationController.register({
          name: this.name,
          email: this.registerEmail,
          password: this.registerPassword
        })
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setToken', response.data.token)
        this.$router.push({name: 'home'})
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.v-content {
  margin-top:90px;
}
.panel {
  border:1px solid black;
  margin:10px;
  background:white;
  margin-top:50px;
  height:450px;

}
.panelTitle {
  line-height: 80px;
  height:80px;
  text-transform: uppercase;
  font-size: 35px;
}
p {
  line-height: 5px;
}
.panelTitle + p {
  font-weight:bold;
}
.registerButton {
  text-transform: uppercase;
  background-color: #222222;
  color:white;
  width: 273px;
  height: 40px;
  margin: auto;
  line-height:40px;
  margin-bottom: 10px;
}
.registerButton:hover {
  background-color: black;
}
.input {
  margin:auto;
  width:290px;
}
</style>
