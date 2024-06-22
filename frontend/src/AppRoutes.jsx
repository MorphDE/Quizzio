import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Statistic from './pages/Statistic/Statistic';
import EditQuestion from './pages/EditQuestion/EditQuestion';
import AllQuestion from './pages/AllQuestions/AllQuestions';
import Quiz from './pages/Quiz/Quiz';
import LoginRegister from './pages/LoginRegister/LoginRegister';
import AuthProvider from './Context/authProvider';
import { useContext } from "react";
import { AuthContext } from "./Context/Context";
import Credits from './pages/Credits/Credits';
import Changelog from "./pages/Changelog/Changelog";

const AppRoutes = () => {

    const { token, setToken } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginRegister/>} />
                {token && 
                <>
                    <Route path="/" element={<Home/>} />
                    <Route path="/statistic" element={<Statistic/>} />
                    <Route path="/allquestions" element={<AllQuestion/>} />
                    <Route path="/credits" element={<Credits/>} />
                    <Route path="/changelog" element={<Changelog/>} />
                    <Route path="/create" element={<EditQuestion/>} />
                    <Route path="/quiz/:categoryId" element={<Quiz/>} />
                    <Route path="/edit/:id" element={<EditQuestion/>} />
                </>}
                    <Route path="*" element={<Navigate replace to="/login"/>} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default AppRoutes;