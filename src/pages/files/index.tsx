import { faker } from "@faker-js/faker";
import Title from "../../components/title";
import "./style.css";
import { Date2String } from "../../utils";
const Files = {
    avi: "avi.svg",
    png: "png.svg",
    dll: "dll.svg",
    psd: "psd.svg",
    pdf: "pdf.svg",
    eps: "eps.svg",
};
function FileBox() {
    const keys = Object.keys(Files) as (keyof typeof Files)[];
    const randomKey = Math.floor(keys.length * Math.random());
    return (
        <div className="box">
            <div className="img-holder">
                <img src={`./images/${Files[keys[randomKey]]}`} />
            </div>
            <h4>My-file.{keys[randomKey]}</h4>
            <p>{faker.name.firstName()}</p>
            <div className="end">
                <span>{Date2String(faker.date.past(2))}</span>
                <span>{faker.random.numeric(2)}MB</span>
            </div>
            <span className="download">
                <i className="fa-solid fa-download"></i>
            </span>
        </div>
    );
}
export default function FilesPage() {
    return (
        <div className="files-page">
            <Title>Files</Title>
            <div className="content-container">
                <div className="files-statics">
                    <h2>Files Statistics</h2>
                    <div className="box green">
                        <div className="icon-container">
                            <i className="fa-regular fa-file-pdf"></i>
                        </div>
                        <div className="text-container">
                            <h5>PDF Files</h5>
                            <span>130</span>
                        </div>
                        <span className="size">1.6GB</span>
                    </div>
                    <div className="box blue">
                        <div className="icon-container">
                            <i className="fa-regular fa-images"></i>
                        </div>
                        <div className="text-container">
                            <h5>svg Files</h5>
                            <span>530</span>
                        </div>
                        <span className="size">6GB</span>
                    </div>
                    <div className="box red">
                        <div className="icon-container">
                            <i className="fa-solid fa-file-csv"></i>
                        </div>
                        <div className="text-container">
                            <h5>CSV Files</h5>
                            <span>230</span>
                        </div>
                        <span className="size">2.6GB</span>
                    </div>
                    <div className="box orange">
                        <div className="icon-container">
                            <i className="fa-regular fa-file-word"></i>
                        </div>
                        <div className="text-container">
                            <h5>Word Files</h5>
                            <span>100</span>
                        </div>
                        <span className="size">1GB</span>
                    </div>
                    <form method="post">
                        <button className="uploads">Uploads</button>
                    </form>
                </div>
                <div className="boxes-container">
                    <FileBox />
                    <FileBox />
                    <FileBox />
                    <FileBox />
                    <FileBox />
                    <FileBox />
                    <FileBox />
                    <FileBox />
                    <FileBox />
                    <FileBox />
                    <FileBox />
                    <FileBox />
                    <FileBox />
                </div>
            </div>
        </div>
    );
}
