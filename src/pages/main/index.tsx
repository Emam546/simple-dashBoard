import Title from "../../components/title";
import { Profile } from "./boxs/profile";
import QuickDraft from "./boxs/draft";
import "./style.css";
import Yearly from "./boxs/yearly";
import Tickets from "./boxs/tickits";
import News from "./boxs/news";
import Tasks from "./boxs/tasks";
import Uploads from "./boxs/uploads";
import Progress from "./boxs/progress";
import Reminder from "./boxs/reminder";
import LastTweets from "./boxs/lastTweets";
import SocialMedia from "./boxs/social-media";
import Projects from "./projects";
import { useContext } from "react";
import { WidgetsContext } from "../../context/widgets";
export default function Main() {
    const [data,setData]=useContext(WidgetsContext);
    return (
        <div className="main-page">
            <Title>DashBoard</Title>
            <div className="content-container">
                <Profile />
                {data.draft && <QuickDraft />}
                {data.yearly && <Yearly />}
                {data.tickets && <Tickets />}
                {data.news && <News />} 
                {data.tasks && <Tasks />}
                <Uploads />
                <Progress />
                <Reminder />
                <LastTweets />
                <SocialMedia />
            </div>
            <Projects />
        </div>
    );
}
