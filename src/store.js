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
      console.log("State after change: " + state.id);
      console.log({id, title, description, price, image});
      router.push('/products/' + id)
    },
    addToCart(state, {id, title, price, image, quantity}){
      state.id = id;
      state.title = title;
      state.price = price;
      state.image = image;

      console.log(quantity);
      console.log(state.quantity);

      console.log(state.cartItems.filter((item) => item.id === id).length);

      if (state.cartItems.some(item => item.id === id)) {
        alert(`Object with id ${id} found in cart`);
        state.quantity = state.cartItems.filter((item) => item.id === id).length + 1;
      }
      else{
        alert(`Object with id ${id} has not been found in cart`);
        state.quantity = 1;
      }

      console.log(quantity);
      console.log(state.quantity);
      quantity = state.quantity;
      console.log(quantity);

      const cartItem = {id, title, price, image, quantity};

      let found = state.cartItems.find(item => item.id === id);
      console.log(found);

      //Remove duplicates from cart if item with same ID gets added again
      if (found) {
        console.log(found.quantity);
        found.quantity++;
        console.log(found.quantity);
      }
      else{
        state.cartItems.push(cartItem);
      }

      console.log(cartItem);
      console.log(state.price);

      console.log(state.cartItems);
      console.log("Total quantity in cart: " + state.cartItems.length);

      console.log(`Quantity of items with ID:${id} = ${state.cartItems.filter((item) => item.id === id).length}`);
      state.quantity = found.quantity;

      console.log(`Occurences of id ${id}: ${state.quantity}`);

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
