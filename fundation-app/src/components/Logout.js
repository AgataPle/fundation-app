import React, {Component} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import NavBar from './Navbar';
import LoginButtons from './LoginButtons';
import {Link} from "react-router-dom";

export default class Logout extends Component {


    render() {
        return (
            <section className="loginSection">
                <LoginButtons/>
                <NavBar/>
                <div className="container loginBox">
                    <div className="logoutSectionTitle"><h1>Wylogowanie nastąpiło<br/>pomyślnie!</h1></div>
                    <div className="loginSectionDeco"><Decoration/></div>
                    <button className="logoutBtn"><Link className="logoutLink" to="/">Strona główna</Link></button>

                </div>

            </section>
        )
    }

}
