<script setup>
  defineProps({
    text: {
      type: String
    },
    image: {
      type: String
    }
  })
</script>

<template>
  <div id="side-banner">
    <h3 id="side-banner-text">{{ text }}</h3>
  </div>
</template>

<style scoped>
  #side-banner{
    background-color: #e3e1ed;
    border: 2px solid #e3e1ed;
    border-radius: 1rem;
    width: 10rem;
    height: 10rem;
    display: grid;
    justify-items: center;
    align-content: space-evenly;
  }
</style>
