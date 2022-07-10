import axios, { AxiosError } from "axios";
import { appSetting } from "../config";

export const API = axios.create({
    baseURL:appSetting.serverUrl,
    headers:{
        Authorization:sessionStorage.getItem('access_token')?`Bearer ${sessionStorage.getItem("access_token")}`:``
    }
})

API.interceptors.request.use(config=>{
    document.body.classList.add("loading_indicator")
    return config;
},err=>{
    return Promise.reject(err)
})

API.interceptors.response.use(resp=>{
    document.body.classList.remove("loading_indicator");
    return resp;
},(err:AxiosError)=>{
    document.body.classList.remove('loading_indicator');
    if(err.response?.status===422 || err.response?.status===401){
        return err.response.data
    }
    else{
        return Promise.reject(err)
    }
})