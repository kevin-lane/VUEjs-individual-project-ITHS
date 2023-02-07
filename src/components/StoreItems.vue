<script setup>
  import ProductCard from '../components/ProductCard.vue'
</script>
<script>
  export default {
    data(){
      return {
        products: null,
        text: "Kelans Emporium"
      }
    },
    methods:{
      fetchProducts(){
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(result => {
              console.log(result);
              this.products = result;
            })
      }
    },
    created() {
      this.fetchProducts();
    }
  }
</script>

<template>
    <h1>{{text}}</h1>
    <article  class="all-products">
      <!-- v-bind, v-for and v-if is used here -->
      <section v-if="products === null">
        <p>LOADING....</p>
      </section>
      <ProductCard v-else v-for="product in products" :name="product.title" :desc="product.description" :price="product.price" :image="product.image" />
    </article >
</template>

<style scoped>
  .all-products{
    overflow: hidden;
  }
</style>
