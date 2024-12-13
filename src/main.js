import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);

// Cấu hình Pinia
//app.use(createPinia());

app.mount('#app');

