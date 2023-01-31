import "./style.css"
export default function News(){
    return <div className="news-box">
        <h1>Latest News</h1>
        <div className="boxes-container">
            <div className="box">
                <div className="img-holder">
                    <img src="./images/news-01.png" alt="" />
                </div>
                <div className="text-container">
                    <h3>Created SASS Section</h3>
                    <p>New SASS Examples & Tutorials</p>
                </div>
                <div className="days-ago">
                    <span>3 Days Ago</span>
                </div>
            </div>
            <div className="box">
                <div className="img-holder">
                    <img src="./images/news-02.png" alt="" />
                </div>
                <div className="text-container">
                    <h3>Created SASS Section</h3>
                    <p>New SASS Examples & Tutorials</p>
                </div>
                <div className="days-ago">
                    <span>3 Days Ago</span>
                </div>
            </div>
            <div className="box">
                <div className="img-holder">
                    <img src="./images/news-03.png" alt="" />
                </div>
                <div className="text-container">
                    <h3>Created SASS Section</h3>
                    <p>New SASS Examples & Tutorials</p>
                </div>
                <div className="days-ago">
                    <span>3 Days Ago</span>
                </div>
            </div>
            <div className="box">
                <div className="img-holder">
                    <img src="./images/news-04.png" alt="" />
                </div>
                <div className="text-container">
                    <h3>Created SASS Section</h3>
                    <p>New SASS Examples & Tutorials</p>
                </div>
                <div className="days-ago">
                    <span>3 Days Ago</span>
                </div>
            </div>
        </div>
    </div>
}