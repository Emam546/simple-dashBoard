import Title from "../../components/title"
import Activities from "./sections/lastactivities"
import ProfileControl from "./sections/profile"
import Skills  from "./sections/skills"
import "./style.css"
export default function Profile(){
    return <div className="profile">
        <Title>Profile</Title>
        <ProfileControl />
        <div className="second-container">
            <Skills />
            <Activities />
        </div>
    </div>
}