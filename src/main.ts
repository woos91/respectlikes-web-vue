import './assets/css/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.axios = axios;
app
.use(router)
.use(pinia)
.mount('#app');
