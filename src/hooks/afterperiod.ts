import { useEffect, useState } from "react";

export function useAfterPeriod(time:number){
    const [state,setState]=useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setState(true)
        },time)
    },[])
    return state
}