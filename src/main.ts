import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

const app = createApp(App);
console.log(import.meta.env.MODE);

app.use(router);
app.mount('#app')

