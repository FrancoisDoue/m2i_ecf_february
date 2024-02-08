import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore("auth", () => {
    const token = ref(null)

    const isLoggedIn = computed(() => !! token.value)

    const login = (auth) => {
        console.log('he!')
        // localStorage.setItem('userToken', auth)
        
        token.value = localStorage.getItem('userToken')
    }
    const logOut = () => {
        localStorage.removeItem('userToken')
    }

    return { token, isLoggedIn, login, logOut }
})