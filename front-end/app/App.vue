<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './src/components/HeaderComponent.vue';
import { useAuthStore } from './src/store/authStore.js'
import { provide, ref } from 'vue';

const authStore = useAuthStore()

const isLogged = ref(false)
const stateOfLogin = (state = authStore.isLoggedIn) => {
    console.log('use state :', state)
    return isLogged.value = state
  }

provide('loginState', { isLogged, stateOfLogin })

</script>

<template>
  <div id="main-content">
    <HeaderComponent class="header-fix"/>
    <RouterView id="view"/>

  </div>

</template>

<style scoped>
#main-content{
  @apply min-h-full w-full flex flex-col
}
#view {
  @apply grow px-36 pt-16
}
.header-fix{
  @apply w-full fixed
}

</style>
