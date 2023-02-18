import { createStore } from 'vuex'
import router from './router';
//Vuex
const mutations = {
    navigateToProduct(state, {id, title, description, price, image}){
      state.id = id;
      state.title = title;
      state.description = description;
      state.price = price;
      state.image = image;
      router.push('/products/' + id)
    },
    addToCart(state, {id, title, price, image, quantity}){
      state.id = id;
      state.title = title;
      state.price = price;
      state.image = image;

      if (state.cartItems.some(item => item.id === id)) {
        alert(`Object with id ${id} found in cart and another one is added to cart`);
        state.quantity = state.cartItems.filter((item) => item.id === id).length + 1;
      }
      else{
        alert(`Object with id ${id} has not been found in cart and been added to cart`);
        state.quantity = 1;
      }

      quantity = state.quantity;
      const cartItem = {id, title, price, image, quantity};

      let found = state.cartItems.find(item => item.id === id);

      //Remove duplicates from cart if item with same ID gets added again
      if (found) {
        found.quantity++;
      }
      else{
        state.cartItems.push(cartItem);
      }
      state.quantity = found.quantity;
    }
  },
  state = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    image: '',
    cartItems: [],
    quantity: 0
  }
//Uses strict: true
export default createStore({ mutations, state, strict: true })
