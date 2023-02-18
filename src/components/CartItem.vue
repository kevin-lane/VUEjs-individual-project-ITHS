<script setup>
  import PlusIcon from './icons/PlusIcon.vue';
  import MinusIcon from './icons/MinusIcon.vue';
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

<!-- Custom events is sent here -->
<template>
  <div id="cart-item-header">
    <img :src="image" alt="item-image" width="60" height="60">
    <strong>{{ name }}</strong>
  </div>
  <p id="cart-item-id">ID: {{ id }}</p>
  <div id="cart-item-footer">
    <button @click="$emit('decreaseBy', 1)" type="button" class="btn btn-success"><MinusIcon /></button>
    <span class="badge text-bg-success">{{ quantity }}</span>
    <button @click="$emit('increaseBy', 1)" type="button" class="btn btn-success"><PlusIcon /></button>
    <strong id="price-tag">${{ price }}</strong>
  </div>
</template>

<style scoped>
  #cart-item-header{
    display: flex;
    align-items: center;
  }
  #cart-item-id{
    color: darkgray;
  }
  #price-tag{
    position: absolute;
    font-style: italic;
    color: green;
    right: 0;
    bottom: 0;
  }
  .badge {
    border-radius: 0;
  }
</style>
