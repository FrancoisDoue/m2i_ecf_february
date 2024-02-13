import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import api from "../services/apiService";


export const useProjectStore = defineStore('project', () => {

    const projectList = ref([])

    const projectWithId = (id) => projectList.value.find(p => p.id == id)

    const setProjectList = async (jwt) => {
        if(!projectList.value.length)
            try {
                const datas = await api.get('/project', {headers:{
                    Accept: 'application/json',
                    Authorization: `Bearer ${jwt}`
                }})
                return projectList.value.push(...datas.data.rows)
            } catch (error) {
                // console.log(error)
            }
    }

    const setTasksToProject = async (id, jwt) => {
        try {
            const datas = await api.get(`/project/${id}`, {headers:{
                // Accept: 'application/json',
                Authorization: `Bearer ${jwt}`
            }})
            // const entryToReplace = projectWithId(datas.data.id)
            // console.log('hello there', entryToReplace)
            projectList.value = projectList.value.map(element => {
                if (element === projectWithId(datas.data.id)){
                    element = datas.data
                }
                return element
            })
            // projectWithId(datas.data.id) = datas.data
            // console.log(projectWithId(datas.data.id))
            console.log(projectList.value)
            return datas.data
        } catch (error) {
            
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