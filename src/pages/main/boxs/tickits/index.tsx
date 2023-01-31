import "./style.css"
export default function Tickets() {
    return (
        <div className="tickets">
            <h1>Tickets Statistics</h1>
            <p>Everything About Support Tickets</p>
            <div className="box-container">
                <div className="box orange">
                    <i className="fa-solid fa-ticket"></i>
                    <h3>2500</h3> 
                    <p>Total</p>
                </div>
                <div className="box blue">
                    <i className="fa-solid fa-spinner"></i>
                    <h3>500</h3> 
                    <p>Pending</p>
                </div>
                <div className="box green">
                <i className="fa-regular fa-circle-check"></i>
                    <h3>1900</h3>
                    <p>Closed</p>
                </div>
                <div className="box red">
                    <i className="fa-regular fa-rectangle-xmark"></i>
                    <h3>100</h3>
                    <p>Deleted</p>
                </div>
            </div>
        </div>
    );
}
