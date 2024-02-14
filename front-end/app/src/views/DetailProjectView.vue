<script setup>
import { onBeforeMount, onBeforeUnmount, ref } from 'vue';
import { useAuthStore } from '../store/authStore';
import { useRoute, RouterLink } from 'vue-router';
import { useProjectStore } from '../store/projectStore';
import CardTaskComponent from '../components/CardTaskComponent.vue';

const { projectList, setProjectList, setTasksToProject, projectWithId } = useProjectStore()
const { token } = useAuthStore()
const route = useRoute()
const projectId = +route.params.projectId

const project = ref({})

const colTitles = ['To do', 'Doing', 'Done']

// onBeforeUnmount(() => console.log('unmount!'))

onBeforeMount(async () => {
        if(!projectList.length) await setProjectList(token)
        if(!projectWithId(projectId).Tasks) await setTasksToProject(projectId, token)
        project.value = projectWithId(projectId)
    // console.log(project.value)
})

</script>

<template>
    <div>
        <div>
            <div class="mini-nav">
                <h5>Votre projet :</h5>
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
            <template v-if="project.Tasks">
                <div v-for="i, t in colTitles" >
                    <CardTaskComponent
                     v-for="task in project?.Tasks.filter(t => t.progress === i-1)"
                     :index="task.id"
                     :task="task"
                    />
                </div>
            </template>
            <div v-else>
                <p>Il n'y a pas de tâches pour ce projet</p>
            </div>

        </div>
    </div>
</template>

<style scoped>
@import url(../../assets/style/components/button.css);
h3{
    @apply text-center ml-96 my-10;
}
.mini-nav {
    @apply w-full flex justify-around items-center;
}
.tasks-bearer{
    @apply flex flex-row min-h-full pt-2;
    > div {
        @apply w-1/3
    }
}

</style>