import "./style.css";
function Bar({ percent }: { percent: number }) {
    return (
        <div className="bar">
            <div
                style={{ width: `${percent}%` }}
            ><span>{percent}%</span></div>
        </div>
    );
}
export default function Yearly() {
    return (
        <div className="yearly-target">
            <h1>Yearly</h1>
            <p>Targets Of The Year</p>
            <div className="targets">
                <div className="box blue">
                    <div className="icon">
                        <i className="fa-solid fa-dollar-sign"></i>
                    </div>
                    <div className="text-container">
                        <span>Money</span>
                        <h3>$20.000</h3>
                        <Bar percent={80} />
                    </div>
                </div>
                <div className="box orange">
                    <div className="icon">
                        <i className="fa-solid fa-dollar-sign"></i>
                    </div>
                    <div className="text-container">
                        <span>Projects</span>
                        <h3>24</h3>
                        <Bar percent={55} />
                    </div>
                </div>
                <div className="box green">
                    <div className="icon">
                        <i className="fa-solid fa-dollar-sign"></i>
                    </div>
                    <div className="text-container">
                        <span>Team</span>
                        <h3>12</h3>
                        <Bar percent={75} />
                    </div>
                </div>
            </div>
        </div>
    );
}
