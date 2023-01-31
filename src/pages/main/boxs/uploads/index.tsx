import "./style.css"
export default function Uploads(){
    return <div className="uploads">
        <h1>Latest Uploads</h1>
        <div className="box-container">
            <div className="box">
                <img src="./images/pdf.svg" alt="" />
                <div className="text-container">
                    <h4>my-file.pdf</h4>
                    <p>Imam</p>
                </div>
                <div className="size">
                    <span>2.9mb</span>
                </div>
            </div>
            <div className="box">
                <img src="./images/avi.svg" alt="" />
                <div className="text-container">
                    <h4>My-Video-File.avi</h4>
                    <p>Admin</p>
                </div>
                <div className="size">
                    <span>12.9mb</span>
                </div>
            </div>
            <div className="box">
                <img src="./images/psd.svg" alt="" />
                <div className="text-container">
                    <h4>My-Psd-File.psd</h4>
                    <p>Ali</p>
                </div>
                <div className="size">
                    <span>9.2mb</span>
                </div>
            </div>
            <div className="box">
                <img src="./images/zip.svg" alt="" />
                <div className="text-container">
                    <h4>My-Zip-File.zip</h4>
                    <p>Ahmed</p>
                </div>
                <div className="size">
                    <span>8.9mb</span>
                </div>
            </div>
            <div className="box">
                <img src="./images/dll.svg" alt="" />
                <div className="text-container">
                    <h4>My-DLL-File.dll</h4>
                    <p>User</p>
                </div>
                <div className="size">
                    <span>2.9mb</span>
                </div>
            </div>
            <div className="box">
                <img src="./images/eps.svg" alt="" />
                <div className="text-container">
                    <h4>My-Eps-File.eps</h4>
                    <p>Designer</p>
                </div>
                <div className="size">
                    <span>9.1mb</span>
                </div>
            </div>
        </div>
    </div>
}