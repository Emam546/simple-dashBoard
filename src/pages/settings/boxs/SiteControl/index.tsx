import { ToggleSwitch } from "../../../../components/toggleSwitch";
import "./style.css"
export default function SiteControl(){
    return <div className="siteControl">
        <h2>Site Control</h2>
        <p>Control The Website If There Is Maintenance</p>
        <div className="website-control column-2-web">
            <div className="info">
                <h4>Website Control</h4>
                <p className="color-gray">Open/Close Website And Type The Reason</p>
            </div>
            <ToggleSwitch name="close-state"/>
        </div>
        <textarea placeholder="Close Message Content"/>
    </div>
}