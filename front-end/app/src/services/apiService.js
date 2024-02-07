import axios from "axios"

const api = axios.create({baseURL: "http://localhost:3000"})


// const responseHandler = async (request) => {
//     try {
//         const response = await request
//         return response.data
//     } catch (e){
//         return {error: true, code: e.response.status, message: e.response.data.error}
//     }
// }

export default api