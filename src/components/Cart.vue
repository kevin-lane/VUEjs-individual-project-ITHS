<script setup>
  import CartItem from './CartItem.vue';
  import CloseIconLg from './icons/CloseIconLg.vue';
</script>
<script>
  export default {
    data(){
      return {
        totalSum: 0,
        cartItems: [],
        visible: false
      }
    },
    methods: {
      fetchCart(){
        this.cartItems = this.$store.state.cartItems;
      },
      deleteItem(id){
        alert(`Deleted item with ID: ${id}`);
        //Finds the index of the item to be deleted
        const itemToDeleteIndex = this.cartItems.findIndex((item) => item.id === id);
        if (itemToDeleteIndex > -1) {
          this.cartItems.splice(itemToDeleteIndex, 1)
        }
        return this.cartItems;
      }
    },
    created(){
      this.fetchCart();
    },
    computed: {
      calcTotalSum(){
        this.totalSum = 0;
        this.cartItems.forEach((item, i) => {
          this.totalSum += item.price * item.quantity;
        });
        return this.totalSum;
      }
    },
    watch: {
      visible(newVal, oldVal){
        console.log(`Old: ${oldVal}; New: ${newVal}`);
        if (newVal === true) {
          document.getElementById('cart').style.display = 'block'
        }
        else if (newVal === false){
          document.getElementById('cart').style.display = 'none'
        }
      }
    }
  }
</script>
<!-- Custom event is recieved here -->
<template>
  <div id="cart">
    <h2>Your cart</h2>
    <CloseIconLg @click="visible = !visible" />
    <span v-if="cartItems.length === 0">Your cart is empty</span>
    <ul v-else>
      <li v-for="item in cartItems">
        <CartItem
          @increase-by="item.quantity++"
          @decrease-by="item.quantity === 1 ? deleteItem(item.id) : item.quantity--"
          :id="item.id"
          :name="item.title"
          :price="item.price"
          :image="item.image"
          :quantity="item.quantity"
        />
      </li>
      <h2>Total sum: ${{ calcTotalSum }}</h2>
    </ul>
  </div>
</template>

<style>
  #cart{
    display: none;
    height: 100%;
    width: 30rem;
    background-color: white;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    padding-top: 2rem;
    padding-left: 1rem;
  }
</style>
