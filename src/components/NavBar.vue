<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import CartIcon from './icons/CartIcon.vue';
</script>

<template>
  <nav>
    <li><RouterLink to="/">HOME</RouterLink></li>
    <li><RouterLink to="/products">PRODUCT</RouterLink></li>
    <li><RouterLink to="/about">ABOUT</RouterLink></li>
    <li><RouterLink to="/contact">CONTACT</RouterLink></li>
    <CartIcon />
  </nav>
  <RouterView />
</template>

<style scoped>
  nav{
    background-color: aliceblue;
    margin-left: 0rem;
    top: 0;
    text-align: center;
    padding: 1rem;
    border-bottom: 2px solid blueviolet;
    box-shadow: 0 4px 20px -4px blueviolet;
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
