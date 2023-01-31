import Title from "../../components/title"
import ProfileControl from "./sections/profile"
import "./style.css"
export default function Profile(){
    return <div className="profile">
        <Title>Profile</Title>
        <ProfileControl />
    </div>
}