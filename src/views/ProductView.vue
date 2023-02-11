<script>

</script>

<template>
  <h1>Clicked Product</h1>
  <img :src="$store.state.image" width="300" height="300" class="rounded float-start" alt="product-image" />
  <h1>{{ $store.state.title }}</h1>
  <p>{{ $store.state.description }}</p>
  <h3>${{ $store.state.price }}</h3>
</template>
