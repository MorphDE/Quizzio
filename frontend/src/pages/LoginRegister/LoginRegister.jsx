import { useState } from "react";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import "./LoginRegister.css";

const LoginRegister = () => {

    const pageTitle = "WILLKOMMEN";
    const [showLogin, setShowLogin] = useState(true);

    return (
        <section className="login-register-page">
            <HeaderTwo title={pageTitle}/>
            { showLogin === true ? <Login changelogin={() => setShowLogin(prev => !prev)}/> : <Register changelogin={() => setShowLogin(prev => !prev)}/> }
        </section>
    );
}
 
export default LoginRegister;