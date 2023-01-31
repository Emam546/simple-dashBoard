import "./style.css"
export default function Progress(){
    return <div className="progress">
        <h1>Lasts Progress</h1>
        <div className="content">
            <ul>
                <li>Got The Project</li>
                <li>Started The Project</li>
                <li>The Project About To Finish</li>
                <li className="stop">Test The Project</li>
                <li>Finish The Project & Get Money</li>
            </ul>
            <img src="./images/project.png" alt="" className="project"/>
        </div>
    </div>
}