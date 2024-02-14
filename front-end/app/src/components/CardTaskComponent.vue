<script setup>
    const props = defineProps({
        task: {
            type: Object,
            required: true
        }
    })

</script>

<template>
    <div class="card-main">

        <h5 class="">{{ task.title }}</h5>
        <p class="">{{ task.description }}</p>
    </div>


</template>

<style scoped>
.card-main{
    @apply w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 
}
h5{
    @apply mb-2 text-2xl font-bold tracking-tight text-gray-900
}
p {
    @apply font-normal text-gray-700
}

</style>