import { ToggleSwitch } from "../../../../components/toggleSwitch";
import "./style.css"
export default function Security(){
    return <div className="security">
        <h2>Security Info</h2>
        <p>Security Information About Your Account</p>
        <div className="content">
            <div className="password column-2-web">
                <div className="info">
                    <h3>Password</h3>
                    <p>Last Change On 25/10/2021</p>
                </div>
                <a href="#">Change</a>
            </div>
            <div className="two-factor column-2-web">
                <div className="info">
                    <h3>Two-Factor Authentication</h3>
                    <p>Enable/Disable The Feature</p>
                </div>
                <ToggleSwitch name="two-factor-state" />
            </div>
            <div className="devices column-2-web">
                <div className="info">
                    <h3>Devices</h3>
                    <p>Check The Login Devices List</p>
                </div>
                <a href="#">Devices</a>
            </div>

        </div>
    </div>
}