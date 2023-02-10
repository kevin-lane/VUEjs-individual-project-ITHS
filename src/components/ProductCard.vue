<script setup>
  defineProps({
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: Image
    },
    id: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    rating: {
      type: Number
    }
  })
</script>

<template>
  <section id="product-item">
    <!-- v-bind is used here, v-bind:src -->
    <img :src="image" width="200" height="200" alt="">
    <h3 id="name-container">{{ name }}</h3>
    <p id="description-container">{{ desc }}</p>
    <p >{{ category }}</p>
    <h3 id="price-container">${{ price }}</h3>
  </section>
</template>

<style>
  #product-item{
    background-color: #f2f2f2;
    width: 20rem;
    height: 45rem;
    margin: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 3px 3px 5px 5px purple;
    float: left;
  }
  #name-container{
    font-weight: 900;
    text-transform: uppercase;
  }
  #description-container{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px;
    margin: 2rem;
  }
  #price-container{
    font-weight: 900;
    font-size: x-large;
    position: absolute;
    bottom: 0;
  }
  img{
    max-width: 100%;
    /* max-height: auto; */
  }
</style>
