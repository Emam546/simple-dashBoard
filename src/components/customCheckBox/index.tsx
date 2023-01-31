import { ReactNode } from "react";
import "./style.css"
export default function CheckBox({
    children,
    ...a
}: { children?: ReactNode } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>) {
    return (
        <input className={`custom-check-box ${a.className}`} type="checkbox" {...a} />
    );
}
