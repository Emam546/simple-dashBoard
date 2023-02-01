import { useContext } from "react";
import { UserProfile } from "../../../../context/gitUser";
import "./style.css";
function Stars({
    fullNum = 5,
    ratedNum,
}: {
    fullNum: number;
    ratedNum: number;
}) {
    return (
        <div className="start-rated">
            {Array(fullNum)
                .fill(0)
                .map((_, i) => {
                    if (ratedNum > i)
                        return <i className="fa-solid fa-star" key={i}></i>;
                    return <i className="fa-regular fa-star" key={i}></i>;
                })}
        </div>
    );
}
export default function ProfileControl() {
    const data = useContext(UserProfile);
    return (
        <div className="profile-control">
            <div className="basic-info">
                <div className="img-holder">
                    <img src={data.avatar_url} alt="" />
                </div>
                <div className="info">
                    <h4>{data.name}</h4>
                    <p>Level 20</p>
                </div>
                <div className="rating-bar">
                    <span style={{ width: "80%" }}></span>
                </div>
                <Stars ratedNum={5} fullNum={5} />
            </div>
            <div className="info">
                <div className="box">
                    <h4>General Information</h4>
                    <div className="text-container">
                        <p>
                            <span>Full Name:</span>
                            {data.name}
                        </p>
                        <p>
                            <span>Gender:</span>Male
                        </p>
                        <p>
                            <span>Country:</span>Egypt
                        </p>
                    </div>
                    <input
                        type="checkbox"
                        name="accept-general-info"
                        className="custom-checkbox-profile"
                    />
                </div>
                <div className="box">
                    <h4>Personal Information</h4>
                    <div className="text-container">
                        <p>
                            <span>Email:</span>
                            {data.email}
                        </p>
                        <p>
                            <span>Phone:</span> 019123456789
                        </p>
                        <p>
                            <span>Date Of Birth:</span>25/10/1982
                        </p>
                    </div>
                    <input
                        type="checkbox"
                        name="accept-general-info"
                        className="custom-checkbox-profile"
                    />
                </div>
                <div className="box">
                    <h4>Job Information</h4>
                    <div className="text-container">
                        <p>
                            <span>Title:</span>Full Stack Developer
                        </p>
                        <p>
                            <span>Programming Language:</span>Python
                        </p>
                        <p>
                            <span>Years Of Experience:</span>15+
                        </p>
                    </div>
                    <input
                        type="checkbox"
                        name="accept-general-info"
                        className="custom-checkbox-profile"
                    />
                </div>
                <div className="box">
                    <h4>Billing Information</h4>
                    <div className="text-container">
                        <p>
                            <span>Payment Method:</span>Paypal
                        </p>
                        <p>
                            <span>Email:</span>email@website.com
                        </p>
                        <p>
                            <span>Subscription:</span>Monthly
                        </p>
                    </div>
                    <input
                        type="checkbox"
                        name="accept-general-info"
                        className="custom-checkbox-profile"
                    />
                </div>
            </div>
        </div>
    );
}
