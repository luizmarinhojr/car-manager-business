import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import StockView from '@/views/StockView.vue'

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
            component: RegisterView
        },
        {
            path: '/estoque',
            name: 'estoque',
            component: StockView
        }
    ]
})

export default router
