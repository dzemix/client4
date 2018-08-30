<template>
  <div>
    <admin-page v-if="$store.state.admin"></admin-page>
    <div v-if="!$store.state.admin" class="login">
        <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="email" label="Email" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" v-model="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    </div>
  </div>
</template>
<script>
import AdminPage from './AdminPage'
import AdminService from '@/services/AdminService'
export default {
  name: 'admin',
  components: {
    AdminPage
  },
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login () {
      try {
        const response = await AdminService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setAdmin', response.data.admin)
        this.$store.dispatch('setAdminToken', response.data.token)
        this.$router.push({
          name: 'admin'
        })
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.login {
  margin-top:100px;
}
</style>
