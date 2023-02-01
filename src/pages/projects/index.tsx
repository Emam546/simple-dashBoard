import { ReactNode, useContext } from "react";
import Title from "../../components/title";
import {
    useGitUserFollowersData,
    FollowingData,
} from "../../hooks/getuserFollowing";
import { UserProfile } from "../../context/gitUser";
import LoadingCircle from "../../components/loading-circle";
import "./style.css";
import { faker } from "@faker-js/faker";
function getRandomFollowers(data: FollowingData) {
    const ranNum = () => Math.floor(Math.random() * data.length);
    const nums = [ranNum(), ranNum()];
    return data
        .slice(Math.min(...nums), Math.max(...nums))
        .map(({ avatar_url, html_url }) => {
            return (
                <a href={html_url} target="_blank">
                    <div className="img-holder">
                        <img src={avatar_url} alt="" />
                    </div>
                </a>
            );
        });
}
function ProgressBar({ num }: { num: number }) {
    let color: string = "red";
    if (num >= 25) color = "orange";
    if (num >= 50) color = "green";
    if (num >= 75) color = "blue";
    return (
        <div className="progress-bar">
            <span style={{ width: `${num}%` }} className={color}></span>
        </div>
    );
}
const randN = () => Math.random() * 100;
const randM = () => Math.floor(Math.random() * 9e4);
const randDate = () => {
    const date = new Date(Date.now() - Math.floor(Math.random() * 9e6));
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
};
function Box({ data }: { data: FollowingData }) {
    return (
        <div className="box">
            <div className="title">
                <h4>{faker.commerce.productName()}</h4>
                <p>{faker.lorem.paragraph(2)}</p>
            </div>
            <div className="team-members">{getRandomFollowers(data)}</div>
            <ul className="requireMents">
                <li>Programming</li>
                <li>Design</li>
                <li>Marketing</li>
                <li>Hosting</li>
            </ul>
            <div className="end">
                <ProgressBar num={randN()} />
                <span className="dollar">{randM()}</span>
            </div>
            <span className="date">{randDate()}</span>
        </div>
    );
}
export default function Projects() {
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
        <div className="projects-page">
            <Title>Projects</Title>
            <div className="boxes-container">
                {[...Array(10)].map(() => {
                    return <Box data={data}/>;
                })}
            </div>
        </div>
    );
}
