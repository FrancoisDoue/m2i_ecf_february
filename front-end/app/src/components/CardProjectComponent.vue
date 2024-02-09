<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})


</script>

<template>
    <div>
        <div class="card-main">
            <a href="#">
                <h5 class="card-title">{{ project.title }}</h5>
            </a>
            <p class="card-description">{{ project.description || "Aucune description" }}</p>
            <RouterLink :to="`/projets/${project.id}`" class="card-btn">
            Gérez votre projet
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </RouterLink>
        </div>

    </div>
</template>

<style scoped>
.card-main {
    @apply max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow min-h-52
}
.card-title {
    @apply mb-2 font-bold tracking-tight text-gray-900
}
.card-description{
    @apply mb-3 font-normal text-gray-700
}
.card-btn{
    @apply inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
}

</style>