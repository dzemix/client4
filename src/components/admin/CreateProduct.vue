<template>
  <div class="createProduct">
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 sm6 >
        <p class="myTitle">title</p>
        <div class="myInput">
          <v-text-field
          v-model="title"
          label="Title"
          outline
          ></v-text-field>
        </div>
      </v-flex>
      <v-flex xs12 sm6>
        <p class="myTitle">features</p>
        <div class="myInput">
          <ul class="myUl" v-for="index in howManyInputs" :key="index">
          <li>
          <v-text-field
          v-model="featureInput[index - 1]"
          :label="`Feature: ${index}`"
          outline
          ></v-text-field>
          </li>
          </ul>
          <v-btn @click="removeFeature" color="success">remove feature</v-btn>
          <v-btn @click="addFeature" color="success">Add feature</v-btn>
        </div>
      </v-flex>
            <v-flex xs12 sm6>
        <p class="myTitle">Avatar</p>
    <div class="dropbox">
      <input type="file" multiple name="avatar" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="input-file">
      <img :src="avatar" alt="here will be picture">
    </div>
      </v-flex>
      <v-btn @click="create" color="success">Create product</v-btn>
    </v-layout>
  </div>
</template>
<script>
import PictureService from '@/services/PictureService'
import ProductService from '@/services/ProductService'
export default {
  data () {
    return {
      title: '',
      featureInput: [],
      features: {},
      avatar: '',
      error: '',
      howManyInputs: 0
    }
  },
  computed: {
  },
  methods: {
    addFeature () {
      this.howManyInputs++
      this.featureInput.push()
      console.log(this.featureInput)
    },
    removeFeature () {
      if (this.howManyInputs > 0) {
        this.howManyInputs--
      }
    },
    async create () {
      try {
        await ProductService.create({
          title: this.title,
          features: this.featureInput,
          avatar: this.avatar
        })
      } catch (err) {
        this.error = err.reponse.data.error
      }
    },
    async save (formData) {
      try {
        const response = await PictureService.upload(formData)
        this.avatar = 'http://localhost:8081/photos/' + response.data
      } catch (err) {
        console.log(err)
      }
    },
    filesChange (fieldName, fileList) {
      // handle file changes
      const formData = new FormData()
      // append the files to FormData
      formData.append(fieldName, fileList[0])
      // save it
      this.save(formData)
    }
  }
}
</script>
<style scoped>
.createProduct {
  margin-top: 50px;
}
.myInput {
  width:80%;
  margin:auto;
}
.myTitle {
  text-transform: uppercase;
  font-size: 35px;
}
.myUl {
  list-style-type: none;
}
</style>
