import axios from "axios";
const instance = axios.create({
    baseURL: 'https://marina-backender.org.kg/cookscorner/',
    headers: {
        "Content-Type": "application/json",
    },
});

export const postLogin = (data) =>instance.post(`users/login/`,data);
export const postRegister = (data) =>instance.post(`users/resend-email/`,data);
export const getDetails =() =>instance.get(`recipes/detail/`);
// export const getCategory =(token, category, page) => instance.get(`recipes/by-category/?category=${category}&page=${page}&limit=10`,{
//     headers:{
//         Authorization:`Bearer ${token}`
//     }
// });
export const getCategory =() => instance.get(`recipes/by-category/`)
