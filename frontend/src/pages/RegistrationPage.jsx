import React from "react";
import "../App.css";
import Register from "../components/Register";

const RegistrationPage = () => {
    return (
        <div>
            <div className="background-scroll"></div>
            <div className="content">
                <Register />
            </div>
        </div>
    );
}

export default RegistrationPage;