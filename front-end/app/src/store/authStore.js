import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { computed ,ref } from 'vue'
import { useProjectStore } from './projectStore'
import { jwtDecode } from 'jwt-decode'


export const useAuthStore = defineStore("auth", () => {
    const { unsetProjectList } = useProjectStore()

    const router = useRouter()

    const isValidToken = (token) => {
        const decode = jwtDecode(token)
        return decode.exp > new Date().getTime()/1000
    }

    const token = ref(JSON.parse(localStorage.getItem('userToken')) || '')

    let isLoggedIn = computed(() => !!token.value && isValidToken(token.value))

    const login = (auth) => {
        localStorage.setItem('userToken', JSON.stringify(auth))
        token.value = auth
        console.log(isLoggedIn)
    }
    const logOut = () => {
        token.value = null
        localStorage.removeItem('userToken')
        unsetProjectList()
        router.push('/connexion')
    }

    return { token, isLoggedIn, login, logOut, isValidToken }
})
