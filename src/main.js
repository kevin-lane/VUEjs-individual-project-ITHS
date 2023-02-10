import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App);

app.use(router);
app.use(store);
app.use(bootstrap);
app.mount('#app')
