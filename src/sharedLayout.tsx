import SideBar from "./components/sidebar";
import { Navigate, Outlet, matchPath, useLocation } from "react-router-dom";
import Header from "./components/header";
import { UserProfileProvider } from "./context/gitUser";
import Loading from "./components/loading";
import { useGitUserData } from "./hooks/getGituser";
import { useAfterPeriod } from "./hooks/afterperiod";
import WidgetsProvider from "./context/widgets";

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
    }
];
export function SharedLayout() {
    const [data, setData] = useGitUserData("Emam546");
    const passSecond = useAfterPeriod(1000);
    if (data === null) return <Navigate to="/404" />;
    if (data === undefined) {
        if (passSecond) return <Loading />;
        return <></>;
    }
    const location = useLocation();
    const currentRoute = routes.find((route) =>
        matchPath(location.pathname, route.path)
    ) || { title: "404" };
    document.title = currentRoute.title;
    return (
        <>
            <SideBar />
            <main>
                <WidgetsProvider>
                    <UserProfileProvider data={data}>
                        <Header />
                        <Outlet />
                    </UserProfileProvider>
                </WidgetsProvider>
            </main>
        </>
    );
}
