<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../store/authStore.js';
import { inject, ref } from 'vue';

const isLogged = inject('loginState').stateOfLogin

const {isLoggedIn, logOut} = useAuthStore()

// const isLogged = ref(isLoggedIn)
// console.log(isLogged.value)

</script>

<template>
<header id="header-nav">
    <div>
        <div></div>
        <nav v-if="!isLogged()">
            <ul >
                <li><RouterLink class="link" to="/connexion">Connexion</RouterLink></li>
                <li><RouterLink class="link" to="/inscription">Inscription</RouterLink></li>
            </ul>
        </nav>
        <nav v-else>
            <ul >
                <li><a class="disconnect-btn" @click="logOut"> Deconnexion </a></li>
            </ul>
        </nav>
    </div>

</header>
</template>

<style scoped>

#header-nav {
    @apply border-gray-200 bg-gray-50;

}
#header-nav > div{
    @apply flex flex-wrap items-center justify-between mx-auto p-4;
}
nav{
    @apply w-1/5 flex justify-end mx-10;
}
ul{
    @apply w-full flex justify-around;
}
li{
    @apply m-auto
}
.disconnect-btn{
    @apply border border-red-600 hover:bg-red-600 hover:text-white font-semibold py-2 px-4 rounded outline-1 outline-black
}


</style>