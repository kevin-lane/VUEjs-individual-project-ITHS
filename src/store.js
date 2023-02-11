import { createStore } from 'vuex'
import router from './router';
//Vuex
const mutations = {
    // increment(state) {
    //   state.counter += 1
    // },
    navigateToProduct(state, {id, title, description, price, image}){
      console.log(state);
      console.log(id);
      console.log(title);
      console.log(description);
      console.log(price);
      console.log(image);

      state.id = id;
      state.title = title;
      state.description = description;
      state.price = price;
      state.image = image
      console.log("State after change: " + state.id);
      router.push('/products/' + id)
    }
  },
  state = {
    // counter: 0,
    id: 0,
    title: '',
    description: '',
    price: 0,
    image: ''
  }
//Uses strict: true
export default createStore({ mutations, state, strict: true })
