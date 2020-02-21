import React, {Component} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import NavBar from './Navbar';
import LoginButtons from './LoginButtons';

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };
    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    };


    render() {
        return (
            <section className="loginSection">
                <LoginButtons/>
                <NavBar/>
                <div className="container loginBox">
                    <div className="loginSectionTitle"><h1>Zaloguj się</h1></div>
                    <div className="loginSectionDeco"><Decoration/></div>
                    <div className="loginForm">
                        <form className="box">
                            <div className="form__field">
                                <input type="email" className="form__field__input" placeholder=" "
                                       pattern="[a-zA-Z0-9-]{3,}@[a-zA-Z0-9-]{3,}[.]{1}[a-zA-Z]{2,}" required/>
                                <label htmlFor="" className="form__field__label">Email</label>
                                <p className="form__field__error">Podany email jest nieprawidłowy</p>

                            </div>
                            <div className="form__field">
                                <input type="password" className="form__field__input" placeholder=" "
                                       pattern="[A-Za-z]{6,99}" required/>
                                <label htmlFor="" className="form__field__label">Hasło</label>
                                <p className="form__field__error">Podane hasło jest za krótkie</p>

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
