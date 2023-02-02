
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./sharedLayout";
import Main from "./pages/main";
import Settings from "./pages/settings";
import Profile from "./pages/Profile";
import Projects from "./pages/projects";
import Courses from "./pages/courses";
import Friends from "./pages/friends";
import FilesPage from "./pages/files";
import Plans from "./pages/Plans";

function App() {
    return (
        <>
            <BrowserRouter basename="/simple-dashBoard/">
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route path="/" element={<Main/>} />
                        <Route path="/settings" element={<Settings/>} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/courses" element={<Courses/>} />
                        <Route path="/friends" element={<Friends/>} />
                        <Route path="/files" element={<FilesPage/>} />
                        <Route path="/plans" element={<Plans/>} />
                    </Route>
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
