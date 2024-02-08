import { createApp } from 'vue'
import './assets/style/style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './src/router'

const app = createApp(App)

app
    .use(createPinia())
    .use(router)
    .mount('#app')
