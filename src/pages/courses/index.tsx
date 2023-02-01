import { useContext } from "react";
import LoadingCircle from "../../components/loading-circle";
import Title from "../../components/title";
import {
    FollowingData,
    useGitUserFollowersData,
} from "../../hooks/getuserFollowing";
import { UserProfile } from "../../context/gitUser";
import "./style.css";
function getRandomFollower(data: FollowingData) {
    const ranNum = Math.floor(Math.random() * data.length);
    const retData = data.at(ranNum);
    if (!retData) return;
    return (
        <a href={retData.html_url} target="_blank">
            <div className="img-holder">
                <img src={retData.avatar_url} alt="" />
            </div>
        </a>
    );
}
const DataContent = [
    {
        title: "Mastering Web Design",
        desc: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
    },
    {
        title: "Data Structure And Algorithms",
        desc: "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
    },
    {
        title:"Responsive Web Design",
        desc:"Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints"
    },
    {
        title:"Mastering Python",
        desc:"Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life"
    },
    {
        title:"PHP Examples",
        desc:"PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases"
    },{
        title:"Data Structure And Algorithms",
        desc:"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering"
    }
];
function Box({ data }: { data: FollowingData }) {
    function getRandomImage() {
        const num = Math.floor(Math.random() * 5) + 1;
        return `./images/course-0${num}.jpg`;
    }
    const text=DataContent.at(Math.floor(Math.random()*DataContent.length))

    return (
        <div className="box">
            <div className="thumbnail">
                <div className="img-holder">
                    <img src={getRandomImage()} alt="" />
                </div>
                <div className="img-user">{getRandomFollower(data)}</div>
            </div>
            <div className="text-container">
                <h4>{text?.title}</h4>
                <p>{text?.desc}</p>
            </div>
            <a href="" className="Course-Info">Course Info</a>
            <div className="end">
                <span className="PeopleNum">{Math.floor(Math.random()*1000)}</span>
                <span className="money dollar">{Math.floor(Math.random()*1000)}</span>
            </div>
        </div>
    );
}
export default function Courses() {
    const { login } = useContext(UserProfile);
    const [data] = useGitUserFollowersData(login);

    if (data === undefined || data === null)
        return (
            <div className="projects-page">
                <Title>Projects</Title>
                <LoadingCircle />
            </div>
        );
    return (
        <div className="courses-page">
            <Title>Courses</Title>
            <div className="boxes-container">
                <Box data={data} />
                <Box data={data} />
                <Box data={data} />
                <Box data={data} />
                <Box data={data} />
                <Box data={data} />
            </div>
        </div>
    );
}
