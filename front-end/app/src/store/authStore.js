import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore("auth", () => {
    const token = ref(localStorage.getItem('userToken') || null)

    const isLoggedIn = computed(() => !! token.value)

    const login = (token) => {
        localStorage.setItem('userToken', token)
    }
    const logOut = () => {
        localStorage.removeItem('userToken')
    }

    return { token, isLoggedIn, login, logOut }
})