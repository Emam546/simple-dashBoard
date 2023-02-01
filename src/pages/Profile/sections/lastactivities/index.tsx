import "./style.css"
export default function Activities(){
    return <div className="activities">
        <h2>Latest Activities</h2>
        <p>Latest Activities Done By The User</p>
        <div className="boxes-container">
            <div className="box">
                <div className="img-holder">
                    <img src="./images/activity-01.png" alt="" />
                </div>
                <div className="text-container">
                    <h3>Store</h3>
                    <p>Bought The Mastering Python Course</p>
                </div>
                <div className="text-container">
                    <h3>18:10</h3>
                    <p>Yesterday</p>
                </div>
            </div>
            <div className="box">
                <div className="img-holder">
                    <img src="./images/activity-02.png" alt="" />
                </div>
                <div className="text-container">
                    <h3>Academy</h3>
                    <p>Got The PHP Certificate</p>
                </div>
                <div className="text-container">
                    <h3>16:05</h3>
                    <p>Yesterday</p>
                </div>
            </div>
            <div className="box">
                <div className="img-holder">
                    <img src="./images/activity-03.png" alt="" />
                </div>
                <div className="text-container">
                    <h3>Badges</h3>
                    <p>Unlocked The 10 Skills Badge</p>
                </div>
                <div className="text-container">
                    <h3>18:05</h3>
                    <p>Yesterday</p>
                </div>
            </div>
            <div className="box">
                <div className="img-holder">
                    <img src="./images/activity-01.png" alt="" />
                </div>
                <div className="text-container">
                    <h3>Store</h3>
                    <p>Bought The Typescript Course</p>
                </div>
                <div className="text-container">
                    <h3>12:05</h3>
                    <p>Yesterday</p>
                </div>
            </div>
        </div>
    </div>
}