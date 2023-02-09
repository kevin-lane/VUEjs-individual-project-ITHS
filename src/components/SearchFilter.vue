<script>
  export default{
    data(){
      return {
        chosenCategories: []
      }
    }
  }
</script>

<template>
  <input type="text" id="search" placeholder="Search for product">
  <fieldset>
    <legend>Category</legend>
    <span>
      <input v-model="chosenCategories" type="checkbox" id="clothes" value="Clothes">
      <label for="clothes">Clothes</label>
    </span>
    <span>
      <input v-model="chosenCategories" type="checkbox" id="electronics" value="Electronics">
      <label for="electronics">Electronics</label>
    </span>
    <span>
      <input v-model="chosenCategories" type="checkbox" id="jewelery" value="Jewelery">
      <label for="jewelery">Jewelery</label>
    </span>
    <p>Chosen category is: {{ chosenCategories }}</p>
  </fieldset>
</template>
