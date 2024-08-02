import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import StockView from '@/views/StockView.vue'
import ClientsView from '@/views/ClientsView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ScheduleView from '@/views/ScheduleView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: HomeView
        },
        {
            path: '/clientes',
            name: 'clientes',
            component: ClientsView
        },
        {
            path: '/servicos',
            name: 'servicos',
            component: ServicesView
        },
        {
            path: '/estoque',
            name: 'estoque',
            component: StockView
        },
        {
            path: '/agendamentos',
            name: 'agendamentos',
            component: ScheduleView
        },
        {
            path: '/cadastrar-veiculo',
            name: 'cadastrar',
            component: RegisterView
        }
    ]
})

export default router
