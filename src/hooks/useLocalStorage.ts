import { useEffect, useState } from "react";
import { json } from "react-router-dom";

export function useLocalStorage(name: string) {
    const state = useState(localStorage.getItem(name));
    const [data,_]=state
    useEffect(()=>{
        localStorage.setItem(name,data || "")
    },[name,data])
    return state
}
export function useLocalJson<T>(name:string,defaultData:T){
    const str=localStorage.getItem(name);
    const state = useState<T>(JSON.parse(str||"null") || defaultData);
    const [data,]=state
    useEffect(()=>{
        localStorage.setItem(name,JSON.stringify(data) || "")
    },[name,data])
    return state
}
