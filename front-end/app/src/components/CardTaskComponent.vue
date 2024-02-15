<script setup>
    const props = defineProps({
        task: {
            type: Object,
            required: true
        }
    })
    const setPriority = [
        {text: 'Priorité basse', style: 'bg-green-500'},
        {text: 'Priorité moyenne', style: 'bg-amber-500'},
        {text: 'Priorité haute', style: 'bg-red-400'}
    ]
    const priority = setPriority[props.task.priority]

</script>

<template>
    <div class="card-main">

        <div class="title-card">
            <h5>{{ task.title }}</h5>
            <div>
                <span :class="priority.style">{{ priority.text }}</span>
            </div>
        </div>
        <p>{{ task.description }}</p>
        <div class="card-buttons">
            <div class="edit-btn">      
                Editer
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </div>
        </div>
    </div>


</template>

<style scoped>
@import url(../../assets/style/components/button.css);
.card-main{
    @apply w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-2;
}
.title-card{
    @apply flex justify-between items-center
}
.card-buttons{
    @apply flex justify-end
}
h5{
    @apply block w-2/3 h-16 mb-2 text-2xl font-bold tracking-tight text-gray-900
}
span {
    @apply block px-2 pb-1 text-sm font-bold text-white rounded
}
p {
    @apply font-normal text-gray-700
}

</style>