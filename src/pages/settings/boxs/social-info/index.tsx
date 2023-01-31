import "./style.css"
export default function SocialInfo(){
    return <div className="social-info">
        <h2>Social Info</h2>
        <p>Social Media Information</p>
        <div className="content">
            <div className="input-container">
                <i className="fa-brands fa-facebook-f"></i>
                <input type="text" name="social-face" placeholder="Twitter Username" id="" />
            </div>
            <div className="input-container">
                <i className="fa-brands fa-twitter"></i>
                <input type="text" name="social-twitter" placeholder="Facebook Username" id="" />
            </div>
            <div className="input-container">
                <i className="fa-brands fa-linkedin"></i>
                <input type="text" name="social-linkedin" placeholder="LinkedIn Username" id="" />
            </div>
            <div className="input-container">
                <i className="fa-brands fa-youtube"></i>
                <input type="text" name="social-youtube" placeholder="Youtube Username" id="" />
            </div>

        </div>
    </div>
}