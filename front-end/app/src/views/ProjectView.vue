<script setup>
import { onBeforeMount } from 'vue';
import { useAuthStore } from '../store/authStore';
import { useProjectStore } from '../store/projectStore';
import CardProjectComponent from '../components/CardProjectComponent.vue'

const { token } = useAuthStore()
const { projectList, setProjectList } = useProjectStore()

console.log(projectList)

onBeforeMount(async () => {
    await setProjectList(token)
})
</script>

<template>
    <div>
        <h3>Gestion de vos projets</h3>
        <hr>
        <div class="card-bearer">
            <CardProjectComponent 
                v-for="p in projectList" 
                :key="p.id"
                :project="p"
                class="card-element"
            />
            <div class="card-element add-project-element">
                <a @click="() => console.log('do something')">Créez un nouveau projet</a>

            </div>
        </div>
    </div>
</template>

<style scoped>
h3{
    @apply text-center ml-96 my-10;
}
.card-bearer{
    @apply flex flex-row flex-wrap;
}
.card-element{
    @apply p-3 w-1/3;
}
.add-project-element{
    @apply flex justify-center items-center;
    a {
        @apply text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 
        font-medium rounded px-10 py-2.5 m-auto;
    }
}

</style>