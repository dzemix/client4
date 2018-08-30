<template>
  <div>
    <v-layout row wrap>
      <v-flex lg6 offset-lg3>
        <p class="myTitle">title</p>
        <div class="myInput">
          <v-text-field
          v-model="product.title"
          label="Title"
          outline
          ></v-text-field>
          </div>
      </v-flex>
      <v-flex lg6 offset-lg3>
        <p class="myTitle">Features</p>
        <div class="myInput">
          <div v-for="(features, index) in features" :key="index">
          <v-text-field
          v-model="product.features[index]"
          label="Title"
          outline
          ></v-text-field>
          </div>

          </div>
      </v-flex>
      <v-flex lg6 offset-lg3>
        <p class="myTitle">Price</p>
        <div class="myInput">
          <v-text-field
          v-model="product.price"
          label="Title"
          outline
          ></v-text-field>
          </div>
      </v-flex>
      <v-flex lg6 offset-lg3>
        <p class="myTitle">Old price</p>
        <div class="myInput">
          <v-text-field
          v-model="product.oldprice"
          label="Title"
          outline
          ></v-text-field>
          </div>
      </v-flex>
      <v-flex lg6 offset-lg3>
        <p class="myTitle">Avatar</p>
              <input type="file" multiple name="avatar" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="input-file">
              <br>
        <img :src="newAvatar ? newAvatar : avatar" alt="">
      </v-flex>
      <v-flex lg6 offset-lg3>
        <v-btn color="success" @click="update">Save</v-btn>
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
      product: [],
      newAvatar: ''
    }
  },
  computed: {
    title () {
      return this.product.title
    },
    features () {
      return this.product.features
    },
    price () {
      return this.product.price
    },
    oldprice () {
      return this.product.oldprice
    },
    avatar () {
      return this.product.avatar
    }
  },
  async mounted () {
    this.product = (await ProductService.view(this.$route.params.productId)).data
  },
  methods: {
    async update () {
      try {
        if (!this.newAvatar) {
          this.newAvatar = this.avatar
        }
        await ProductService.update({
          productId: this.$route.params.productId,
          title: this.product.title,
          features: this.features,
          price: this.product.price,
          oldprice: this.product.oldprice,
          avatar: this.newAvatar
        })
        this.$router.push({
          name: 'admin'
        })
      } catch (err) {
        console.log(err.response.data.error)
      }
    },
    async save (formData) {
      try {
        const response = await PictureService.upload(formData)
        this.newAvatar = 'https://shop-server-testing.herokuapp.com/photos/' + response.data
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
.myTitle {
  text-transform: uppercase;
  font-size: 35px;
}
</style>
