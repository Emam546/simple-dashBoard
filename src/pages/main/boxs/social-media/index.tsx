import "./style.css"
export default function SocialMedia() {
    return (
        <div className="social-media">
            <h1>Social Media Stats</h1>
            <div className="content">
                <div className="row twitter">
                    <div className="img-holder">
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <p className="info">90K Followers</p>
                    <a href="">Follow</a>
                </div>
                <div className="row facebook">
                    <div className="img-holder">
                        <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <p className="info">2M Like</p>
                    <a href="">Like</a>
                </div>
                <div className="row youtube">
                    <div className="img-holder">
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                    <p className="info">1M Subs</p>
                    <a href="">Subscribe</a>
                </div>
                <div className="row linkedin">
                    <div className="img-holder">
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <p className="info">70K Followers</p>
                    <a href="">Follow</a>
                </div>
            </div>
        </div>
    );
}
