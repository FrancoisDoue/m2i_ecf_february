import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore("auth", () => {
    const token = ref(localStorage.getItem('userToken'))

    let isLoggedIn = () => computed(token)

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

// export const useAuthStore = defineStore({
//     id:'auth',

//     state: () => ({
//         token: JSON.parse(localStorage.getItem('userToken')),
//         returnUrl: null
//     }),
//     actions: {
//         isLoggedIn: () => {
//             console.log(this.token)
//             return !!this.token
//         },
//         login: (auth) => {
//             console.log(auth)
//             localStorage.setItem('userToken', JSON.stringify(auth))
//             this.state.token = auth
//             console.log(this.state.token)
//             useRouter().push('/project')
//         },
//         logOut: () => {
//             this.token = null
//             localStorage.removeItem('userToken')
//         }
//     }

})