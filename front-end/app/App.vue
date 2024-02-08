<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './src/components/HeaderComponent.vue';
import { useAuthStore } from './src/store/authStore.js'

const authStore = useAuthStore()
console.log(authStore.isLoggedIn)
console.log(authStore.token)

// console.log(authStore.token)

</script>

<template>
  <div id="main-content">
    <HeaderComponent />
    <RouterView id="view"/>

  </div>

</template>

<style scoped>
#main-content{
  @apply min-h-full w-full flex flex-col
}
#view {
  @apply grow px-36
}

</style>
