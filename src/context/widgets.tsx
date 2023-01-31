import { ReactNode, createContext, useState,Dispatch } from "react";
import { useLocalJson } from "../hooks/useLocalStorage";
import React from "react";
const DefaultData={
    draft:true,
    yearly:true,
    tickets:true,
    news:true,
    tasks:true,
    topSearch:true
}
export type WidgetsValues=typeof DefaultData
export const WidgetsContext=createContext<[WidgetsValues,Function]>([DefaultData,()=>{}])
export default function WidgetsProvider({children}:{children:ReactNode}){
    const state=useLocalJson("Draft",DefaultData)
    return <WidgetsContext.Provider value={state}>
        {children}
    </WidgetsContext.Provider>
}