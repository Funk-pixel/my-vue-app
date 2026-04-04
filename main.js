import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Только адаптивность, которая нужна ВЕЗДЕ
import './assets/responsive.css'

const app = createApp(App)
app.use(router)
app.mount('#app')