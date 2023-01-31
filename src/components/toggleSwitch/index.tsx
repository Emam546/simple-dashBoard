import "./style.css"
export function ToggleSwitch({className,...a}:{className?:string} & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className={`${className} switcher-checkbox`}>
            <input type="checkbox" className="toggle-switch" {...a} />
            <div className="switcher"></div>
        </label>
    );
}
