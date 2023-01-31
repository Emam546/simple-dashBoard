import { ReactNode } from "react";
import "./style.css"
export default function Title({children}:{children:ReactNode}){
    return <h2 className="special-title">
        {children}
    </h2>
}