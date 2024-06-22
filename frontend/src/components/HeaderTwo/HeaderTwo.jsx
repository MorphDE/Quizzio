import React from "react";
import "./HeaderTwo.css";

const HeaderTwo = ({ title }) => {

    return (
        <section className="headertwo-wrap">
            <div className="headertwo-title">
                <h1>{title}</h1>
            </div>
        </section>
    );
}

export default HeaderTwo;
