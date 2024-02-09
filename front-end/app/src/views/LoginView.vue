<script setup>
import { ref, inject } from 'vue';
import api from '../services/apiService.js';
import { useAuthStore } from '../store/authStore';
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = useAuthStore()

const stateOfLogin = inject('loginState').stateOfLogin

const login = ref("")
const password = ref("")
const errorText = ref("")

const errorHandler = (bool) => {
    if(bool) {
        login.value = ""
        password.value = ""
        errorText.value = "Mot de passe et/ou identifiant incorrects"
    } else {
        errorText.value = ""
    }
}
const signin = async () => {
    try {
        const res = await api.post('/user/login', {login: login.value, password: password.value})
        authStore.login(res.data.token)
        console.log(authStore.isLoggedIn)
        if (authStore.isLoggedIn){
            stateOfLogin()
            router.push('/projets')
        } 
    } catch (error) {
        errorHandler(true)
    }
}

</script>

<template>
    <div>
        <div id="form-view">
            <h3>Connexion</h3>
            <form @submit.prevent="signin">
                <div>
                    <label for="login">Login : </label>
                    <input v-model="login" @focus="() => errorHandler(false)" type="text" id="login" name="login" required>
                </div>
                <div>
                    <label for="psw">Mot de passe : </label>
                    <input v-model="password" @focus="() => errorHandler(false)" type="password" id="psw" name="psw" required>
                </div>
                <p v-if="errorText" class="error-message">
                    {{ errorText }} 
                </p>
                <div>
                    <button class="submit-btn" type="submit">Se connecter</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    @import url(../../assets/style/components/form.css);
    @import url(../../assets/style/components/button.css);

    .error-message{
        @apply bg-red-600 bg-opacity-65 py-3 w-full text-center text-white rounded-sm
    }
</style>