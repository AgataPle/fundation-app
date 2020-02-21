import React, {Component} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import NavBar from './Navbar';
import LoginButtons from './LoginButtons';

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    render() {
        return (
            <section className="loginSection">
                <LoginButtons/>
                <NavBar/>
                <div className="container loginBox">
                    <div className="loginSectionTitle"><h1>Zaloguj się</h1></div>
                    <div className="loginSectionDeco"><Decoration/></div>
                    <div className="loginForm">
                        <form>
                            <div className="loginEmail">
                                <label>Email<br/>
                                    <input type="email" name="email" value={this.state.email}
                                           className="emailLoginSection"/>
                                </label>
                            </div>
                            <div className="loginPassword">
                                <label>Hasło<br/>
                                    <input type="password" name="password" value={this.state.password}
                                           className="passwordLoginSection"/>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="loginBtns">
                        <button className="loginSectionBtn">Załóż konto</button>
                        <button className="loginSectionBtn">Zaloguj się</button>
                    </div>
                </div>

            </section>
        )
    }

}
