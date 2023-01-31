import { ReactNode, useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
export function BackUpRadio({
    children,
    ...a
}: { children?: ReactNode } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>) {
    const id = uuidv4();
    return (
        <div className="BackUpRadio">
            <input type="radio" {...a} id={id} />
            <label htmlFor={id}>{children}</label>
        </div>
    );
}
export default function BackUpManager() {
    return (
        <div className="backup">
            <h2>Backup Manager</h2>
            <p>Control Backup Time And Location</p>
            <div className="radio-container">
                <div className="box">
                    <input
                        type="radio"
                        className="first-type-radio"
                        name="frequency"
                        id="frequency_1"
                    />
                    <label htmlFor="frequency_1">Daily</label>
                </div>
                <div className="box">
                    <input
                        type="radio"
                        className="first-type-radio"
                        name="frequency"
                        id="frequency_2"
                    />
                    <label htmlFor="frequency_2">Weekly</label>
                </div>
                <div className="box">
                    <input
                        type="radio"
                        className="first-type-radio"
                        name="frequency"
                        id="frequency_3"
                    />
                    <label htmlFor="frequency_3">Monthly</label>
                </div>
            </div>
            <div className="backUp-manager">
                <BackUpRadio name="backUp-kind">MegaMen</BackUpRadio>
                <BackUpRadio name="backUp-kind">Zero</BackUpRadio>
                <BackUpRadio name="backUp-kind">Sigma</BackUpRadio>
            </div>
        </div>
    );
}
