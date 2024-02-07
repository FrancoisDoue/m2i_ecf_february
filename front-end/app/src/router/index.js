import { createRouter, createWebHistory } from "vue-router"
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeView},
        {path: '/connexion', component: LoginView},
        {path: '/inscription', component: RegisterView}
    ]
})