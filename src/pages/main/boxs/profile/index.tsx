import { useContext, useEffect, useState } from "react";
import "./style.css";
import { UserProfile } from "../../../../context/gitUser";
import { Data } from "../../../../hooks/getGituser";
import { Link } from "react-router-dom";
export function useGetMoney(data: Data) {
    const [money, setmoney] = useState(0);
    useEffect(() => {
        setmoney(Math.round(data.public_repos * Math.random() * 1000));
    }, [data.public_repos]);
    return money;
}
export function Profile() {
    const data = useContext(UserProfile);
    const money = useGetMoney(data);
    return (
        <div className="profile-box">
            <div className="title">
                <div className="text-content">
                    <h2>Welcome</h2>
                    <span>{data.login}</span>
                </div>
                <div className="welcome-img">
                    <img src="./images/welcome.png" alt="" />
                </div>
                <div className="float-img">
                    <img src={data.avatar_url} alt="" />
                </div>
            </div>
            <ul className="sub-title">
                <li>
                    <h4>{data.name}</h4>
                    <span>developer</span>
                </li>
                <li>
                    <h4>{data.public_repos}</h4>
                    <span>projects</span>
                </li>
                <li>
                    <h4>${money}</h4>
                    <span>Earned</span>
                </li>
            </ul>
            <div className="profile-link">
                <Link to="/profile">profile</Link>
            </div>
        </div>
    );
}
