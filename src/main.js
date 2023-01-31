import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/login',
      component: () => import('./Login.vue')
    }
  ]
})

createApp(App).use(router).mount('#app')