import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Form from './components/Form.vue'

const routes = [
  { path: '/', component: Form },
  { path: '/about', component: HelloWorld },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})