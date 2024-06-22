import React, { useContext } from "react";
import "./Dropdown.css";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Context/Context";

const Dropdown = () => {

    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);

    const logout = () => {
        setToken();
        navigate("/login");
    }

    return (
        <section className="dropdown-menu">
            <div className="dropdown-buttons">
                <Link to={"/statistic"}>
                    <div className="dropdown-btn">
                        <p>MEINE STATISTIK</p>
                    </div>
                </Link>
                <Link to={"/create"}>
                    <div className="dropdown-btn">
                        <p>FRAGEN ERSTELLEN</p>
                    </div>
                </Link>
                <Link to={"/allquestions"}>
                <div className="dropdown-btn">
                    <p>FRAGEN BEARBEITEN</p>
                </div>
                </Link>
                <Link to={"/credits"}>
                <div className="dropdown-btn">
                    <p>INFORMATIONEN</p>
                </div>
                </Link>
                <Link to={"/changelog"}>
                <div className="dropdown-btn">
                    <p>CHANGELOG</p>
                </div>
                </Link>
            </div>
            <div className="dropdown-logout" onClick={logout}>
                <p>AUSLOGGEN</p>
            </div>
        </section>
    );
}

export default Dropdown;
