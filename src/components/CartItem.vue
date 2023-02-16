<script setup>
  defineProps({
    name: {
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
    quantity: {
      type: Number,
      required: true
    }
  })
</script>
<script>
  export default {
    // emits: ['increaseBy', 'decreseBy'],
  }
</script>
<!-- Custom events is sent here -->
<template>
    <img :src="image" alt="item-image" width="60" height="60">
    <h3>{{ name }}</h3>
    <p>ID: {{ id }}</p>
    <strong>${{ price }}</strong>
    <button @click="$emit('decreaseBy', 1)" type="button" class="btn btn-light">-</button>
    <span>{{ quantity }}</span>
    <button @click="$emit('increaseBy', 1)" type="button" class="btn btn-light">+</button>
</template>

<style>
  li{
    list-style-type: none;
  }
</style>
