import api from "./apiService.js";

// import {useAuthStore} from "../store/authStore.js"

// const {token, login, isLoggedIn} = useAuthStore()



export const authenticate = async(body) => {
    try{
        const res = await api.post('/user/login', body)
        localStorage.setItem('userToken', JSON.stringify(res.data.token))
    }catch(err){
        
    };
    // console.log(token)
    // console.log(isLoggedIn)
}