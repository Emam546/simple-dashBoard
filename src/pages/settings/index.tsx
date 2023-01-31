import Title from "../../components/title"
import SiteControl from "./boxs/SiteControl"
import BackUpManager from "./boxs/backUpManager"
import Info from "./boxs/info"
import Security from "./boxs/security-info"
import SocialInfo from "./boxs/social-info"
import WidgetsControl from "./boxs/widgets"
import "./style.css"
export default function Settings(){
    return <div className="settings">
        <Title>Settings</Title>
        <form className="content-container" autoComplete="off">
            <SiteControl />
            <Info />
            <Security />
            <SocialInfo />
            <WidgetsControl />
            <BackUpManager />
        </form>
    </div>
}