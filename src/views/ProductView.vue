<script>

</script>

<template>
  <div id="product-site">
    <h1>{{ $store.state.title }}</h1>
    <img :src="$store.state.image" width="300" height="300" class="rounded float-start" alt="product-image" />

    <p>ID: {{ $store.state.id }}</p>

    <section>
      <strong id="price-tag">${{ $store.state.price }}</strong>
      <button id="add-to-cart-btn" @click="$store.commit('addToCart', {'id':$store.state.id, 'title':$store.state.title, 'price':$store.state.price, 'image':$store.state.image, 'quantity':$store.state.quantity})" type="button" class="btn btn-primary">Add to Cart</button>
    </section>

  </div>
  <p id="description-section">{{ $store.state.description }}</p>
</template>

<style scoped>
  #product-site{
    padding: 5rem;
  }
  #price-tag{
    font-size: xxx-large;
    color: green;
  }
  #add-to-cart-btn{
    position: absolute;
    right: 0;
    top: 1rem;
  }

</style>
