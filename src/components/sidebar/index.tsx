import "./style.css";
import { NavLink } from "react-router-dom";

export default function SideBar() {
    return (
        <div className="sidebar">
            <h1>Imam</h1>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `nav-link ${isActive && "active"}`
                    }
                >
                    <i className="fa-solid fa-chart-column"></i>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `nav-link ${isActive && "active"}`
                    }
                >
                    <i className="fa-solid fa-gear"></i>
                    <span>Settings</span>
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        `nav-link ${isActive && "active"}`
                    }
                >
                    <i className="fa-regular fa-user"></i>
                    <span>Profile</span>
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `nav-link ${isActive && "active"}`
                    }
                >
                    <i className="fa-solid fa-diagram-project"></i>
                    <span>Projects</span>
                </NavLink>
                <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                        `nav-link ${isActive && "active"}`
                    }
                >
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span>Courses</span>
                </NavLink>
                <NavLink
                    to="/friends"
                    className={({ isActive }) =>
                        `nav-link ${isActive && "active"}`
                    }
                >
                    <i className="fa-solid fa-user-group"></i>
                    <span>Friends</span>
                </NavLink>
                <NavLink
                    to="/files"
                    className={({ isActive }) =>
                        `nav-link ${isActive && "active"}`
                    }
                >
                    <i className="fa-regular fa-file"></i>
                    <span>Files</span>
                </NavLink>
                <NavLink
                    to="/plans"
                    className={({ isActive }) =>
                        `nav-link ${isActive && "active"}`
                    }
                >
                    <i className="fa-regular fa-credit-card"></i>
                    <span>Plans</span>
                </NavLink>
            </nav>
        </div>
    );
}
