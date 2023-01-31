import "./style.css";
export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="responsive-width">            
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Finish Date</td>
                            <td>Client</td>
                            <td>Price</td>
                            <td>Team</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ministry Wikipedia</td>
                            <td>15 May 2022</td>
                            <td>Ministry</td>
                            <td>$5200</td>
                            <td className="td-images">
                                <div className="img-holder">
                                    <img src="./images/team-01.png" alt="" />
                                </div>
                                <div className="img-holder">
                                    <img src="./images/team-03.png" alt="" />
                                </div>
                                <div className="img-holder">
                                    <img src="./images/team-02.png" alt="" />
                                </div>
                                <div className="img-holder">
                                    <img src="./images/team-04.png" alt="" />
                                </div>
                            </td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>Mensassa</td>
                            <td>22 Jun 2023</td>
                            <td>Cid ahmed</td>
                            <td>$2000</td>
                            <td className="td-images">
                                <div className="img-holder">
                                    <img src="./images/team-01.png" alt="" />
                                </div>
                                <div className="img-holder">
                                    <img src="./images/team-04.png" alt="" />
                                </div>
                            </td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>777 Shop</td>
                            <td>1 Feb 2019</td>
                            <td>Ali Ahmed</td>
                            <td>$5000</td>
                            <td className="td-images">
                                <div className="img-holder">
                                    <img src="./images/team-02.png" alt="" />
                                </div>
                                <div className="img-holder">
                                    <img src="./images/team-04.png" alt="" />
                                </div>
                            </td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>Bouba App</td>
                            <td>12 Nov 2021</td>
                            <td>Bouba</td>
                            <td>$1000</td>
                            <td className="td-images">
                                <div className="img-holder">
                                    <img src="./images/team-05.png" alt="" />
                                </div>
                                <div className="img-holder">
                                    <img src="./images/team-02.png" alt="" />
                                </div>
                                <div className="img-holder">
                                    <img src="./images/team-04.png" alt="" />
                                </div>
                            </td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>We Data Page</td>
                            <td>14 Dec 2020</td>
                            <td>WE</td>
                            <td>$6000</td>
                            <td className="td-images">
                                <div className="img-holder">
                                    <img src="./images/team-02.png" alt="" />
                                </div>
                                <div className="img-holder">
                                    <img src="./images/team-05.png" alt="" />
                                </div>
                            </td>
                            <td>Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
