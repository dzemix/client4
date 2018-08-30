<template>
  <div class="createProduct">
    <v-layout row wrap>
      <v-flex lg6 offset-lg3>
        <p class="myTitle">Avatar</p>
    <div class="dropbox">
      <input type="file" multiple name="gallery" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="input-file">
      <br>
      <div v-if="istrue">
      <v-carousel class="carousel">
        <v-carousel-item class="picture"
          v-for="(picture,i) in gallery"
          :key="i"
          :src="picture"
        ></v-carousel-item>
      </v-carousel>
    </div>
    </div>
      </v-flex>
      <v-flex lg6 offset-lg3>
        <v-btn @click="create" color="success">Create gallery</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import PictureService from '@/services/PictureService'
import ProductService from '@/services/ProductService'
export default {
  data () {
    return {
      gallery: []
    }
  },
  computed: {
    istrue () {
      if (this.gallery.length) {
        return true
      }
    }
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
      if (this.gallery.length) {
        try {
          await ProductService.createGallery({
            productId: this.$route.params.productId,
            src: this.gallery
          })
        } catch (err) {
          console.log(err.response.data.error)
        }
      }
    },
    async save (formData) {
      try {
        const response = await PictureService.uploadGallery(formData)
        this.gallery.push(`http://95.49.118.193:8081/photos/gallery/${response.data}`)
        console.log(this.gallery)
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
