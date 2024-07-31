import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { vMaska } from 'maska/vue'

const app = createApp(App)

app.use(router)

app.directive('maska', vMaska)

app.mount('#app')
