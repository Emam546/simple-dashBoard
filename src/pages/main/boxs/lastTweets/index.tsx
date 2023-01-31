import { useContext } from "react";
import { UserProfile } from "../../../../context/gitUser";
import "./style.css"
export default function LastTweets() {
    const data=useContext(UserProfile)
    return (
        <div className="tweets">
            <h1>Latest Post</h1>
            <div className="title">
                <div className="img-holder">
                    <img src={data.avatar_url} alt="" />
                </div>
                <div className="info">
                    <h4>Osama Elzero</h4>
                    <p>About 3 Hours Ago</p>
                </div>
            </div>
            <p>
                You Can Fool All Of The People Some Of The Time, And Some Of The
                People All Of The Time, But You Can't Fool All Of The People All
                Of The Time.
            </p>
            <div className="likes">
                <div className="likes-section">
                    <i className="fa-regular fa-heart"></i>1.8k
                </div>
                <div className="comments-section">
                    <i className="fa-regular fa-comments"></i>552
                </div>
            </div>
        </div>
    );
}
