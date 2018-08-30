<template>
  <div>
    <nav-bar></nav-bar>
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12
          :class="{xsProductTitle: $vuetify.breakpoint.width < 768}">
          <div class="links" :class="{hidden: $vuetify.breakpoint.width >= 768}">
            <div><v-icon small>keyboard_arrow_left</v-icon><span>Monitory</span></div>
          </div>
            <h1>{{product.title}}</h1>
          </v-flex>
          <v-flex xs12 md6 v-if="istrue">
            <v-carousel class="carousel">
              <v-carousel-item class="picture"
                v-for="(picture,i) in gallery"
                :key="i"
                :src="picture"
              ></v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import ProductService from '@/services/ProductService'
export default {
  name: 'ViewProduct',
  components: {
    NavBar
  },
  data () {
    return {
      product: {},
      gallery: {}
    }
  },
  computed: {
    istrue () {
      if (this.gallery) {
        return Object.keys(this.gallery).length
      }
    }
  },
  async mounted () {
    console.log()
    this.product = (await ProductService.view(this.$route.params.productId)).data
    this.gallery =
      (await ProductService.gallery(this.$route.params.productId)).data.src
  },
  crated () {
    this.gallery = (ProductService.gallery()).data.src
  }
}
</script>
<style scoped>
.hidden {
  display:none;
}
.v-content {
  margin-top:90px;
}
h1, h2 {
  font-weight: normal;
}
.xsProductTitle {
}
.xsProductTitle{
  text-align:left;
}
.xsProductTitle div.links:hover {
  cursor: pointer;
}
.xsProductTitle div.links:hover span{
  text-decoration: underline;
}
.carousel {
  height: 364px;
}
.v-jumbotron {
  width:75%;
  margin:auto;
}
</style>
