import SideBar from "./components/sidebar";
import { Navigate, Outlet, matchPath, useLocation } from "react-router-dom";
import Header from "./components/header";
import { UserProfileProvider } from "./context/gitUser";
import Loading from "./components/loading";
import { useGitUserData } from "./hooks/getGituser";
import { useAfterPeriod } from "./hooks/afterperiod";
import WidgetsProvider from "./context/widgets";
import {FollowerProvider } from "./context/followers";

const routes = [
    {
        title: "DashBoard",
        path: "/",
    },
    {
        title: "Settings",
        path: "/settings",
    },
    {
        title: "Profile",
        path: "/profile",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Courses",
        path: "/courses",
    },
    {
        title: "Friends",
        path: "/friends",
    },
    {
        title: "Files",
        path: "/files",
    },
    {
        title: "Plans",
        path: "/plans",
    },
];
export function SharedLayout() {
    
    const [data,] = useGitUserData("soumyajit4419");
    const location = useLocation();
    const passSecond = useAfterPeriod(1000);
    if (data === null) return <Navigate to="/404" />;
    if (data === undefined) {
        if (passSecond) return <Loading />;
        return <></>;
    }

    const currentRoute = routes.find((route) =>
        matchPath(location.pathname, route.path)
    ) || { title: "404" };
    document.title = currentRoute.title;
    return (
        <>
            <SideBar />
            <main>
                <WidgetsProvider>
                    <FollowerProvider name={data.login}>
                        <UserProfileProvider data={data}>
                            <Header />
                            <Outlet />
                        </UserProfileProvider>
                    </FollowerProvider>
                </WidgetsProvider>
            </main>
        </>
    );
}
