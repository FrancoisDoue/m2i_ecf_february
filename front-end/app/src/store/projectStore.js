import { defineStore } from "pinia";
import { ref } from "vue";
import api from "../services/apiService";


export const useProjectStore = defineStore('project', () => {

    const projectList = ref([])

    const projectWithId = (id) => {
        if(projectList.value.length) return projectList.value.find(p => p.id == id)
        return {}
    }

    const setProjectList = async (jwt) => {
        if(!projectList.value.length)
            try {
                const datas = await api.get('/project', {headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${jwt}`
                }})
                return projectList.value.push(...datas.data.rows)
            } catch (e) {
                return projectList.value = []
            }
    }

    const setTasksToProject = async (id, jwt) => {
        try {
            const datas = await api.get(`/project/${id}`, {headers:{
                Authorization: `Bearer ${jwt}`
            }})
            projectList.value = projectList.value.map(element => {
                if (element === projectWithId(datas.data.id)){
                    element = datas.data
                }
                return element
            })
            console.log(projectList.value)
            return datas.data
        } catch (error) {
            return error
        }
    }

    const unsetProjectList = () =>{ 
        projectList.value = []
        console.log(projectList)
    }


    return {
        projectList, 
        projectWithId, 
        setProjectList, 
        unsetProjectList, 
        setTasksToProject
    }
})