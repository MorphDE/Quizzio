import Notify from "../Notify/Notify";
import "./Register.css";
import { useState } from 'react';
import { BACKEND_URL } from './../../utils/api';

const Register = (props) => {
    const initialFormData = {
        vorname: "",
        nachname: "",
        email: "",
        password: ""
    };

    const [formData, setFormData] = useState(initialFormData);
    const [postUser, setPostUser] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${BACKEND_URL}/api/v1/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            setPostUser(responseData);
            setFormData(initialFormData); 
            setShowNotification(true); 
            setTimeout(() => {
                setShowNotification(false);
                props.changelogin()
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
        <section className="register-wrap">
            <div className="register-box">
                <h1 className="register-title">REGISTRIEREN</h1>
                <p className="register-text">Du bist neu bei uns, und benötigst ein Benutzerkonto, um unsere App nutzen zu können. Fülle die Felder aus und lege dir einen Account an.</p>
                <form className="registerform" onSubmit={handleRegister}>
                    <input type="text" name="vorname" id="vorname" placeholder="Vorname" value={formData.vorname} onChange={handleInputChange} />
                    <input type="text" name="nachname" id="nachname" placeholder="Nachname" value={formData.nachname} onChange={handleInputChange} />
                    <input type="email" name="email" id="email" placeholder="E-Mail" value={formData.email} onChange={handleInputChange} />
                    <input type="password" name="password" id="password" placeholder="Passwort" value={formData.password} onChange={handleInputChange} />
                    <button type="submit" className="btn-register">REGISTRIEREN</button>
                </form>
                <p className="lostpw" onClick={() => props.changelogin()}>Du hast bereits ein Konto?</p>
                <div className={showNotification ? "notify2-open" : "notify2-close"}>
                <Notify>
                    <p>Du hast dich erfolgreich registriert.</p>
                    <p>Du kannst dich jetzt einloggen.</p>
                </Notify>
                </div>
            </div>
        </section>
    );
}

export default Register;
