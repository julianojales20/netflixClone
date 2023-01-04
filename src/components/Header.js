import React from "react";
import "./Header.css";

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/564x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}