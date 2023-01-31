import "./style.css";
export default function Reminder() {
    return (
        <div className="reminder">
            <h1>Reminders</h1>
            <div className="box-container">
                <div className="box green">
                    <div className="info">
                        <h4>Check My Tasks List</h4>
                        <p>28/09/2022 - 12:00am</p>
                    </div>
                </div>
                <div className="box blue">
                    <div className="info">
                        <h4>Check My Projects</h4>
                        <p>28/09/2022 - 12:00am</p>
                    </div>
                </div>
                <div className="box red">
                    <div className="info">
                        <h4>Call All My Clients</h4>
                        <p>28/09/2022 - 12:00am</p>
                    </div>
                </div>
                <div className="box orange">
                    <div className="info">
                        <h4>Finish The Development Workshop</h4>
                        <p>28/09/2022 - 12:00am</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
