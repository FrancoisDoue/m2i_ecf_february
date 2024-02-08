import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore("auth", () => {
    const token = ref(localStorage.getItem('userToken') || null)

    let isLoggedIn = computed(() => !! token.value)

    const login = (auth) => {
        localStorage.setItem('userToken', auth)
        token.value = localStorage.getItem('userToken')
    }
    const logOut = () => {
        token.value = null
        localStorage.removeItem('userToken')
    }

    return { token, isLoggedIn, login, logOut }
})