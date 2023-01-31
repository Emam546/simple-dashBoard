import { useState } from "react";
import "./style.css"
function DisabledEmail() {
    const [state, setState] = useState(true);
    return (
        <>
            <label htmlFor="#email">Email</label>
            <div className="email-container">
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="o@gmail.com"
                    disabled={state}
                />
                <input
                    type="button"
                    className="change-button"
                    onClick={() => setState(false)}
                    value="Change"
                />
            </div>
        </>
    );
}

export default function Info() {
    return (
        <div className="general-info">
            <h1>General Info</h1>
            <p>General Information About Your Account</p>
            <div className="content">
                <label htmlFor="#first-name">First Name</label>
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="First Name"
                />
                <label htmlFor="#first-name">Last Name</label>
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last Name"
                />
                <DisabledEmail />
            </div>
        </div>
    );
}
