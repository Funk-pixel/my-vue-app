import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/product/:id', component: ProductDetail },
  { path: '/contact', component: Contact }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})