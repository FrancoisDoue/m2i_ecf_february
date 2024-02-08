<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from "../services/apiService.js";

const router = useRouter()

const login = ref("")
const password = ref("")
// let confirmPassword = ref("")

const register = async () => {
    try{
        const newUser = await api.post(
            '/user/register',
            {login: login.value, password: password.value}
        )
        if (newUser?.status === 201) router.push('/connexion')
    }catch(e) {
        console.log(e)
    }
}

</script>

<template>
    <div>
        <div id="form-view">
            <h3>Inscription</h3>
            <form @submit.prevent="register">
                <div>
                    <label for="login">Votre login : </label>
                    <input v-model="login" type="text" id="login" name="login" required>
                </div>
                <div>
                    <label for="psw">Votre mot de passe : </label>
                    <input v-model="password" type="password" id="psw" name="psw" required>
                </div>
                <div>
                    <button class="submit-btn" type="submit">S'inscrire</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    @import url(../../assets/style/components/form.css);
    @import url(../../assets/style/components/button.css);
</style>