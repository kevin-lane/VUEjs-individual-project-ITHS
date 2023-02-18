<script setup>
  import axios from 'axios';
  import ProductCard from '../components/ProductCard.vue';
  import Spinner from './Spinner.vue';
</script>
<script>
  export default {
    data() {
        return {
            products: null,
            checkedCategories: []
        };
    },
    computed: {
        //Filters between different categories
        filteredCategories() {
            return this.products.filter(i => this.checkedCategories.includes(i.category));
        },
    },
    methods: {
        fetchProducts() {
            axios.get("https://fakestoreapi.com/products")
                .then((response) => {
                this.products = response.data;
            });
        }
    },
    created() {
        this.fetchProducts();
    },
    components: { Spinner }
}
</script>

<template>
  <fieldset id="category-filter">
    <legend>Category</legend>
    <span id="category-choices">
      <input v-model="checkedCategories" type="checkbox" id="clothes" value="men's clothing" ref="clothesCheck">
      <label for="clothes">Clothes</label>
    </span>
    <span id="category-choices">
      <input v-model="checkedCategories" type="checkbox" id="electronics" value="electronics" ref="electronicsCheck">
      <label for="electronics">Electronics</label>
    </span>
    <span id="category-choices">
      <input v-model="checkedCategories" type="checkbox" id="jewelery" value="jewelery" ref="jeweleryCheck">
      <label for="jewelery">Jewelery</label>
    </span>
  </fieldset>
  <article  class="all-products">
      <!-- v-bind, v-for and v-if is used here -->
      <section v-if="products === null" id="load-spinner">
        <Spinner />
      </section>
      <ProductCard
        v-else-if="this.$refs.electronicsCheck.checked"
        v-for="product in filteredCategories"
        @click="$store.commit('navigateToProduct', {'id':product.id, 'title':product.title, 'description':product.description, 'price':product.price, 'image':product.image})"
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
        @click="$store.commit('navigateToProduct', {'id':product.id, 'title':product.title, 'description':product.description, 'price':product.price, 'image':product.image})"
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
        @click="$store.commit('navigateToProduct', {'id':product.id, 'title':product.title, 'description':product.description, 'price':product.price, 'image':product.image})"
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
        @click="$store.commit('navigateToProduct', {'id':product.id, 'title':product.title,'description':product.description, 'price':product.price, 'image':product.image})"
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
    top: 1rem;
  }
  #category-filter{
    margin: auto;
    top: 1rem;
    background-color: #f2f2f2;
    border: 2px solid rgb(182, 135, 226);
    box-shadow: 0 4px 20px -4px blueviolet;
    border-radius: 1rem;
    width: 25rem;
  }
  legend{
    text-align: center;
  }
  #category-choices{
    margin: 1rem;
  }
</style>
