<template>
<div>
    <v-toolbar flat color="white">
      <v-toolbar-title>My CRUD</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="products"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-left">
          <ul v-for="(feature, index) in props.item.features" :key="index">
            <li>{{feature}}</li>
          </ul>
        </td>
        <td class="text-xs-left">{{ props.item.price }},00 zł</td>
        <td class="text-xs-left">{{ props.item.oldprice }},00 zł</td>
        <td class="text-xs-left">{{ props.item.Admin.email }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="addMoreFeatures(props.item.id)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <span>No produtct here</span>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import ProductService from '@/services/ProductService'
export default {
  data: () => ({
    products: [],
    dialog: false,
    headers: [
      {text: 'Product name', value: 'title'},
      { text: 'Features', value: 'calories' },
      { text: 'Price', value: 'price' },
      { text: 'Old Price', value: 'Old Price' },
      { text: 'Autor', value: 'Autor' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),
  methods: {
    addMoreFeatures (value) {
      this.$router.push({
        name: 'editProduct',
        params: {
          productId: value
        }
      })
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  async mounted () {
    this.products = (await ProductService.index()).data
  }
}
</script>
<style scoped>
.mainComp {
  color:red;
}
</style>
