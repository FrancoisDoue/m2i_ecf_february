import axios from "axios"

const api = axios.create({baseURL: "http://localhost:3000"})

api.interceptors.request.use((config) => {
    console.log('config', config)
    return config
})
api.interceptors.response.use(
    (res) => {
        console.log('response', res)
        return res
    },
    (err) => Promise.reject(err)
)

export default api