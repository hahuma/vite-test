import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './Login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

createApp(App).use(router).mount('#app')