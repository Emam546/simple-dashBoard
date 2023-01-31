import { ReactNode, useState } from "react";
import "./style.css";
function Task({ children ,disabled }: { children: ReactNode,disabled?:boolean }) {
    const [state,setState]=useState(false);
    if(state)
        return <></>
    return (
        <div className={`box ${disabled && "disabled"}`}>
            <div className="text-container">{children}</div>
            <i className="fa-solid fa-trash-can orange" onClick={()=>setState(true)}></i>
        </div>
    );
}
export default function Tasks() {
    return (
        <div className="tasks-box">
            <h1>Latest Tasks</h1>
            <Task>
                <h4>Record One New Video</h4>
                <p>Record Python Create Exe Project</p>
            </Task>
            <Task>
                <h4>Write Article</h4>
                <p>Write Low Level vs High Level Languages</p>
            </Task>
            <Task disabled={true}>
                <h4>Attend The Meeting</h4>
                <p>Attend The Project Business Analysis Meeting</p>
            </Task>
            <Task>
                <h4>Finish Lesson</h4>
                <p>Finish Teaching Flex Box</p>
            </Task>
        </div>
    );
}
