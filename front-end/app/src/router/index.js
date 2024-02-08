import { createRouter, createWebHistory } from "vue-router"
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ProjectView from '../views/ProjectView.vue'
import { useAuthStore } from '../store/authStore.js'
import {reactive} from 'vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/connexion'},
        {path: '/connexion', component: LoginView},
        {path: '/inscription', component: RegisterView},
        {path: '/projets', component: ProjectView},
    ]
})

router.beforeEach((to, from) => {
    const {isLoggedIn} = useAuthStore()
    if (isLoggedIn) {
        return true
    }else if(to.fullPath.startsWith('/projets')) return '/connexion'
    return true
})

export default router