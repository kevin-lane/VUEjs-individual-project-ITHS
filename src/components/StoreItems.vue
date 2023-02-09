<script setup>
  import axios from 'axios'
  import ProductCard from '../components/ProductCard.vue'
  import SearchFilter from '../components/SearchFilter.vue'

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
        return this.products.filter(i => this.checkedCategories.includes(i.category))
      }
    },
    methods:{
      fetchProducts(){
            axios.get('https://fakestoreapi.com/products')
            .then((response) => {
              console.log(response.data);
              this.products = response.data;
              console.log(this.products);
            })
      },
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
      <input v-model="checkedCategories" type="checkbox" id="clothes" value="men's clothing" ref="clothesCheck">
      <label for="clothes">Clothes</label>
    </span>
    <span>
      <input v-model="checkedCategories" type="checkbox" id="electronics" value="electronics" ref="electronicsCheck">
      <label for="electronics">Electronics</label>
    </span>
    <span>
      <input v-model="checkedCategories" type="checkbox" id="jewelery" value="jewelery" ref="jeweleryCheck">
      <label for="jewelery">Jewelery</label>
    </span>
    <p>Chosen category is: {{ checkedCategories }}</p>
  </fieldset>
    <article  class="all-products">
      <!-- v-bind, v-for and v-if is used here -->
      <section v-if="products === null">
        <p>LOADING....</p>
      </section>
      <ProductCard
        v-else-if="this.$refs.electronicsCheck.checked"
        v-for="product in filteredCategories"
        :id="product.id"
        :name="product.title"
        :desc="product.description"
        :price="product.price"
        :category="product.category"
        :image="product.image"
      />

      <ProductCard
        v-else-if="this.$refs.jeweleryCheck.checked"
        v-for="product in filteredCategories"
        :id="product.id"
        :name="product.title"
        :desc="product.description"
        :price="product.price"
        :category="product.category"
        :image="product.image"
      />

      <ProductCard
        v-else-if="this.$refs.clothesCheck.checked"
        v-for="product in filteredCategories"
        :id="product.id"
        :name="product.title"
        :desc="product.description"
        :price="product.price"
        :category="product.category"
        :image="product.image"
      />

      <ProductCard
        v-else
        v-for="product in products"
        :id="product.id"
        :name="product.title"
        :desc="product.description"
        :price="product.price"
        :category="product.category"
        :image="product.image"
      />
    </article >
</template>

<style scoped>
  .all-products{
    overflow: hidden;
  }
</style>
