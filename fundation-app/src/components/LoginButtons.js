import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class LoginButtons extends Component{
    render() {
        return(
            <div className="loginButtons">
                <Link to="/login" className="loginLink">Zaloguj</Link>
                <Link to="/rejestration" className="loginLink">Załuż konto</Link>
            </div>
        )
    }
}
