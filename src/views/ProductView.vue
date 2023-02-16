<script>

</script>

<template>
  <h1>Clicked Product</h1>
  <img :src="$store.state.image" width="300" height="300" class="rounded float-start" alt="product-image" />
  <h1>{{ $store.state.title }}</h1>
  <p>ID: {{ $store.state.id }}</p>
  <p>{{ $store.state.description }}</p>
  <h3>${{ $store.state.price }}</h3>
  <button @click="$store.commit('addToCart', {'id':$store.state.id, 'title':$store.state.title, 'price':$store.state.price, 'image':$store.state.image, 'quantity':$store.state.quantity})" type="button" class="btn btn-primary">Add to Cart</button>
</template>
