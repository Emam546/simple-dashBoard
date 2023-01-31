import { useContext } from "react";
import "./style.css";
import { UserProfile } from "../../context/gitUser";
export default function Header() {
    const data = useContext(UserProfile);
    return (
        <header className="header">
            <form method="post">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="search" placeholder="Type a Keyword" name="search" id="" />
            </form>
            <div className="user-section">
                <i className="fa-regular fa-bell notification"></i>
                <a href={data.htm_url} target="_blank">
                    <div className="img-holder">
                        <img src={data.avatar_url} alt={data.login} />
                    </div>
                </a>
            </div>
        </header>
    );
}
