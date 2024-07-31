import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/cadastrar-veiculo',
      name: 'cadastrar',
      component: () => import('../views/RegisterVehicleView.vue')
    },
    {
      path: '/estoque',
      name: 'estoque',
      component: () => import('../views/StockView.vue')
    }
  ]
})

export default router
