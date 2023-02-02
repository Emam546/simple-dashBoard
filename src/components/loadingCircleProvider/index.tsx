import { ReactNode } from "react";
import LoadingCircle from "../loading-circle";

export default function LoadingCircleProvider<T>({data,children}:{data:T|undefined,children:ReactNode}){
    if (data == undefined || data == null)
        return (
            <LoadingCircle />
        );
    return <>{children}</>
}