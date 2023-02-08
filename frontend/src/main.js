import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './routers.js'

// 1. Create a new Vue application instance.
const app = createApp(App)

// 2. Register the router with the application.
app.use(router)

// 3. Mount the application to the DOM.
app.mount('#app')


