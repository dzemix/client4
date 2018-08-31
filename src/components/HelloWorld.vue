<template>
  <div class="hello">
    <nav-bar></nav-bar>
    <v-content>
      <v-container>
        <v-layout row wrap >
          <v-flex class="test" lg3 md3
          v-if="$vuetify.breakpoint.mdAndUp"
          ><p>kategories</p></v-flex>
          <v-flex class="test" lg9 md9 xs12 row>
            <v-layout row justify-center>
              <v-flex sm10>
            <v-layout row wrap>
              <v-flex md4 sm6 xs12 class="product"
              :class="{smallProduct: $vuetify.breakpoint.smAndDown && $vuetify.breakpoint.width > 750,
                productBigBorder: $vuetify.breakpoint.mdAndUp,
                smallBroder: $vuetify.breakpoint.smOnly,
                xsProduct: $vuetify.breakpoint.xsOnly
              }"
              v-for="product in products" :key="product.id">
                <div @click="viewProduct(product.id)">
                  <img :src="product.avatar" class="img-thumbnail" alt="">
                  <p>{{product.title}}</p>
                  <div style="height:21px;">star module</div>
                  <ul v-for="(feature, index) in product.features" :key="index">
                    <li>{{feature}}</li>
                  </ul>
                  <div class="productPrice">
                    <span class="productOldprice">
                      {{product.oldprice}},00 zł
                    </span>
                    <span style="margin-left:10px;">
                      {{product.price}},00 zł
                    </span>
                  </div>
                </div>
              </v-flex>
            </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import ProductService from '@/services/ProductService'
import NavBar from '@/components/NavBar'
export default {
  name: 'HelloWorld',
  components: {
    NavBar
  },
  data () {
    return {
      products: ''
    }
  },
  methods: {
    viewProduct (value) {
      this.$router.push({
        name: 'viewProduct',
        params: {
          productId: value
        }
      })
    }
  },
  async mounted () {
    try {
      this.products = (await ProductService.index()).data
    } catch (err) {
      console.log(err.response.data.error)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-content {
  margin-top:90px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.test p {
  margin: 1px;
}
.product {
  position:relative;
  height:460px;
  padding:30px 15px 61px;
}
.img-thumbnail {
  display: block;
  width:100%;
  margin:auto;
}
.product div {
  text-align: left;
}
.product div p {
  font-size: 16px;
  line-height: 1.4;
}
.product div p:hover {
  text-decoration: underline;
}
.product:hover {
  cursor: pointer;
}
ul {
  text-align:left;
}
ul li {
  font-size: 11px;
}
.smallProduct div img.img-thumbnail {
  width:80%;
}
.smallBroder {
  border-top: 1px solid #D6DAE3;
  border-right: 1px solid #D6DAE3;
}
.smallBroder:nth-child(2n) {
  border-top: 1px solid #D6DAE3;
  border-right: 0px solid #D6DAE3;
}
.productBigBorder {
  border-top: 1px solid #D6DAE3;
  border-right: 1px solid #D6DAE3;
}
.productBigBorder:nth-child(3n) {
  border-top: 1px solid #D6DAE3;
  border-right: 0px solid #D6DAE3;
}
.xsProduct {
  position:relative;
  padding: 15px;
  padding-left: 33%;
  height:223px;
  border-bottom: 1px solid #D6DAE3;
}
.xsProduct div img {
  left:0px;
  position: absolute;
  float:left;
  width:30%;
  margin-left:0;
}
.productPrice {
  position:absolute;
  font-size: 16px;
  bottom:15px;
  right:15px;
}
.productOldprice {
  color: #9B9B9B;
  text-decoration: line-through;
}
</style>
