import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginOptionPage from "./page/LoginOptionPage";
import Login from "./component/Login";
import MainPage from "./page/MainPage";
import DetailPage from "./page/DetailPage";

export default function Router() {
    return (
        <div className="Router">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/posts/:id" element={<DetailPage/>} />
                    <Route path="/auth/" element={<LoginOptionPage />} />
                     <Route path="/auth/login" element={<Login />} />
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
