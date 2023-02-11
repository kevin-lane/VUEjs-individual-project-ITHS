<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import CartIcon from './icons/CartIcon.vue';
</script>

<template>
  <nav>
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/products">Products</RouterLink></li>
    <li><RouterLink to="/about">About</RouterLink></li>
    <li><RouterLink to="/contact">Contact</RouterLink></li>
    <CartIcon />
  </nav>
  <RouterView />
</template>

<style scoped>
  nav{
    background-color: #ffddff;
    margin-left: 0rem;
    top: 0;
    text-align: center;
    /* height: 50%; */
    padding: 1rem;
    border-bottom: 2px solid blueviolet;
    /* width: 100%;*/
  }
  li {
    list-style: none;
    display: inline;
    margin: 5rem;
  }
  li a {
    text-decoration: none;
  }
</style>
