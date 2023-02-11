<script setup>
  import axios from 'axios'
  import ProductCard from '../components/ProductCard.vue'
  import store from '../store';
</script>
<script>
  export default {
    data(){
      return {
        products: null,
        text: "Kelans Emporium",
        checkedCategories: []
      }
    },
    computed: {
      //Filters between different categories
      filteredCategories(){
        return this.products.filter(i => this.checkedCategories.includes(i.category.name))
      },

    },
    methods:{
      fetchProducts(){
            // axios.get('https://fakestoreapi.com/products')
            // .then((response) => {
            //   console.log(response.data);
            //   this.products = response.data;
            //   console.log(this.products);
            // });
            axios.get('https://api.escuelajs.co/api/v1/products')
            .then((response) => {
              console.log(response.data);
              this.products = response.data;
              console.log(this.products);
            });
            axios.get('https://api.escuelajs.co/api/v1/categories')
            .then((response) => {
              console.log(response.data);
            });
      },
      // navigateToProduct(id, title, description, price, image){
      //   console.log("Product clicked " + id);
      //   console.log("Title: " + title);

      //   console.log(store.state.title);
      //   store.state.title = title;
      //   console.log("After state change: " + store.state.title);

      //   this.$router.push('/products/' + id)
      // }
    },
    created() {
      this.fetchProducts();
    },
    watch: {

    }
  }
</script>

<template>
    <h1>{{text}}</h1>
    <!-- <SearchFilter /> -->
    <fieldset>
    <legend>Category</legend>
    <span>
      <input v-model="checkedCategories" type="checkbox" id="clothes" value="Clothes" ref="clothesCheck">
      <label for="clothes">Clothes</label>
    </span>
    <span>
      <input v-model="checkedCategories" type="checkbox" id="electronics" value="Electronics" ref="electronicsCheck">
      <label for="electronics">Electronics</label>
    </span>
    <span>
      <input v-model="checkedCategories" type="checkbox" id="furniture" value="Furniture" ref="furnitureCheck">
      <label for="furniture">Furniture</label>
    </span>
    <span>
      <input v-model="checkedCategories" type="checkbox" id="shoes" value="Shoes" ref="shoesCheck">
      <label for="shoes">Shoes</label>
    </span>
    <span>
      <input v-model="checkedCategories" type="checkbox" id="others" value="Others" ref="othersCheck">
      <label for="others">Others</label>
    </span>
    <p>Chosen category is: {{ checkedCategories }}</p>
  </fieldset>
    <article  class="all-products">
      <!-- v-bind, v-for and v-if is used here -->
      <section v-if="products === null">
        <p>LOADING....</p>
      </section>
      <!-- Electonics -->
      <ProductCard
        v-else-if="this.$refs.electronicsCheck.checked"
        v-for="product in filteredCategories"
        @click="$store.commit('navigateToProduct', {'id':product.id, 'title':product.title, 'description':product.description, 'price':product.price, 'image':product.images})"
        :id="product.id"
        :name="product.title"
        :desc="product.description"
        :price="product.price"
        :category="product.category.name"
        :image="product.images"
      />
      <!-- Furniture -->
      <ProductCard
        v-else-if="this.$refs.furnitureCheck.checked"
        v-for="product in filteredCategories"
        @click="$store.commit('navigateToProduct', {'id':product.id, 'title':product.title, 'description':product.description, 'price':product.price, 'image':product.images})"
        :id="product.id"
        :name="product.title"
        :desc="product.description"
        :price="product.price"
        :category="product.category.name"
        :image="product.images"
      />
      <!-- Clothes -->
      <ProductCard
        v-else-if="this.$refs.clothesCheck.checked"
        v-for="product in filteredCategories"
        @click="$store.commit('navigateToProduct', {'id':product.id, 'title':product.title, 'description':product.description, 'price':product.price, 'image':product.images})"
        :id="product.id"
        :name="product.title"
        :desc="product.description"
        :price="product.price"
        :category="product.category.name"
        :image="product.images"
      />
      <!-- Shoes -->
      <ProductCard
        v-else-if="this.$refs.shoesCheck.checked"
        v-for="product in filteredCategories"
        @click="$store.commit('navigateToProduct', {'id':product.id, 'title':product.title, 'description':product.description, 'price':product.price, 'image':product.images})"
        :id="product.id"
        :name="product.title"
        :desc="product.description"
        :price="product.price"
        :category="product.category.name"
        :image="product.images"
      />
      <!-- Others -->
      <ProductCard
        v-else-if="this.$refs.othersCheck.checked"
        v-for="product in filteredCategories"
        @click="$store.commit('navigateToProduct', {'id':product.id, 'title':product.title, 'description':product.description, 'price':product.price, 'image':product.images})"
        :id="product.id"
        :name="product.title"
        :desc="product.description"
        :price="product.price"
        :category="product.category.name"
        :image="product.images"
      />
      <!-- All products -->
      <ProductCard
        v-else
        v-for="product in products"
        @click="$store.commit('navigateToProduct', {'id':product.id, 'title':product.title, 'description':product.description, 'price':product.price, 'image':product.images})"
        :id="product.id"
        :name="product.title"
        :desc="product.description"
        :price="product.price"
        :category="product.category.name"
        :image="product.images"
      />
    </article >
</template>

<style scoped>
  .all-products{
    overflow: hidden;
  }
</style>
