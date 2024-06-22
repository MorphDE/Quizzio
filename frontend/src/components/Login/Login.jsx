import { useContext, useState } from "react";
import "./Login.css";
import Notify from "../Notify/Notify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { BACKEND_URL } from './../../utils/api';

const Login = (props) => {

    const initialFormData = {
        email: "",
        password: ""
    };

    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);
    const [postUser, setPostUser] = useState(null);
    const [showNotification, setShowNotification] = useState(false);
    const [existError, setExistError] = useState(false);

    const { setToken } = useContext(AuthContext);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${BACKEND_URL}/api/v1/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            if(responseData.err) {
                setExistError(true)
            } else {
                setPostUser(responseData);
                console.log(responseData);
                setToken(responseData.result.tokens.accessToken);
                setFormData(initialFormData);
                setExistError(false) 
            }
            setShowNotification(true); 
            setTimeout(() => {
                setShowNotification(false);
                navigate("/")
            }, 3000);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="login-box">
            <h1 className="login-title">EINLOGGEN</h1>
            <p className="login-text">Wenn du bereits ein Benutzerkonto bei uns erstellt hast, kannst du dich hier mit deinen Anmeldedaten einloggen.</p>
            <form className="loginform" onSubmit={handleLogin}>
                <input type="email" name="email" id="email" placeholder="E-Mail" value={formData.email} onChange={handleInputChange}/>
                <input type="password" name="password" id="pw" placeholder="Passwort" value={formData.password} onChange={handleInputChange}/>
                <button  className="btn-login">EINLOGGEN</button>
            </form>
            <p className="createaccount" onClick={() => props.changelogin()}>Benutzerkonto erstellen</p>
            <div className={showNotification ? "notify2-open" : "notify2-close"}>
                <Notify error={existError}>
                    {existError === false ?
                    <>
                        <p>Du hast dich erfolgreich eingeloggt.</p>
                        <p>Du wirst automatisch weitergeleitet.</p>
                    </>
                    :
                    <>
                        <p>Benutzername oder Passwort falsch.</p>
                        <p>Bitte überprüfe deine Eingabe.</p>
                    </>
                    }  
                </Notify>
            </div>
        </div>
    );
}
 
export default Login;