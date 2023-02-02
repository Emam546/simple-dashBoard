import Title from "../../components/title";
import "./style.css"
export default function Plans(){
    return <div className="plans">
        <Title>Plans</Title>
        <div className="boxes-container">
            <div className="box green">
                <div className="title">
                    <h2>Free</h2>
                    <h1 className="price">0.00</h1>
                </div>
                <ul>
                    <li>Access All Text Lessons <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Access All Videos Lessons <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Appear On Leaderboard <i className="fa-solid fa-circle-info help"></i></li>
                    <li className="not-active">Browse Content Without Ads <i className="fa-solid fa-circle-info help"></i></li>
                    <li className="not-active">Access All Assignments <i className="fa-solid fa-circle-info help"></i></li>
                    <li className="not-active">Get Daily Prizes <i className="fa-solid fa-circle-info help"></i></li>
                    <li className="not-active">Earn Certificate <i className="fa-solid fa-circle-info help"></i></li>
                    <li className="not-active">1 GB Space For Hosting Files <i className="fa-solid fa-circle-info help"></i></li>
                    <li className="not-active">Access Badge System <i className="fa-solid fa-circle-info help"></i></li>
                </ul>
                <a href="#" className="join">Join</a>
            </div>
            <div className="box blue">
                <div className="title">
                    <h2>Free</h2>
                    <h1 className="price">0.00</h1>
                </div>
                <ul>
                    <li>Access All Text Lessons <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Access All Videos Lessons <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Appear On Leaderboard <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Browse Content Without Ads <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Access All Assignments <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Get Daily Prizes <i className="fa-solid fa-circle-info help"></i></li>
                    <li className="not-active">Earn Certificate <i className="fa-solid fa-circle-info help"></i></li>
                    <li className="not-active">1 GB Space For Hosting Files <i className="fa-solid fa-circle-info help"></i></li>
                    <li className="not-active">Access Badge System <i className="fa-solid fa-circle-info help"></i></li>
                </ul>
                <a href="#" className="join">Join</a>
            </div>
            <div className="box orange">
                <div className="title">
                    <h2>Free</h2>
                    <h1 className="price">0.00</h1>
                </div>
                <ul>
                    <li>Access All Text Lessons <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Access All Videos Lessons <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Appear On Leaderboard <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Browse Content Without Ads <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Access All Assignments <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Get Daily Prizes <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Earn Certificate <i className="fa-solid fa-circle-info help"></i></li>
                    <li>1 GB Space For Hosting Files <i className="fa-solid fa-circle-info help"></i></li>
                    <li>Access Badge System <i className="fa-solid fa-circle-info help"></i></li>
                </ul>
                <p className="current-plan">This Is Your Current Plan</p>
            </div>
        </div>
    </div>
}