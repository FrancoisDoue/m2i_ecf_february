<script setup>
import { onBeforeMount, ref } from 'vue';
import { useAuthStore } from '../store/authStore';
import { useRoute, RouterLink } from 'vue-router';
import { useProjectStore } from '../store/projectStore';

const { projectList, setProjectList, setTasksToProject, projectWithId } = useProjectStore()
const { token } = useAuthStore()
const route = useRoute()

const tasks = ref(null)
const project = ref({})


// if(!projectList)
const projectId = +route.params.projectId
// console.log(projectId)
// console.log(project)



onBeforeMount(async () => {
    if(!projectList.length) await setProjectList(token)
    project.value = projectWithId(projectId)
    tasks.value = await setTasksToProject(projectId, token).tasks
    console.log(project, tasks)


    // await setProjectList(token)
})
</script>

<template>
    <div>
        <div>
            <div class="mini-nav">
                <h5>Bienvenue sur votre projet :</h5>
                <RouterLink to="/projets" class="back-btn">
                    Retour à vos projets
                    <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                    </svg>
                </RouterLink>
            </div>
            <h3>{{ project.title }}</h3>
            <hr>
        </div>
        <div class="tasks-bearer">
            <div id="default-task"></div>
            <div id="current-task"></div>
            <div id="done-task">hey!</div>

        </div>
    </div>
</template>

<style scoped>
@import url(../../assets/style/components/button.css);
h3{
    @apply text-center ml-96 my-10;
}
h5{
    @apply block
}
.mini-nav {
    @apply flex justify-between items-center
}
.tasks-bearer{
    @apply flex flex-row min-h-full
}


</style>