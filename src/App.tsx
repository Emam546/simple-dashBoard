
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./sharedLayout";
import Main from "./pages/main";
import Settings from "./pages/settings";
import Profile from "./pages/Profile";

function App() {
    return (
        <>
            <BrowserRouter basename="/simple-dashBoard/">
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route path="/" element={<Main/>} />
                        <Route path="/settings" element={<Settings/>} />
                        <Route path="/profile" element={<Profile/>} />
                    </Route>
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
