import React, {Component} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';

export default class Form extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    }

    render() {
        return (
            <section>
                    <div className="container formContainer">
                        <div></div>
                        <div className="form">
                            <div className="formIntro">
                                <h1 className="formTitle">Skontaktuj się z nami</h1>
                                <div className="formDeco"><Decoration/></div>
                            </div>
                            <div className="formBox">
                                <form>
                                    <div className="topForm">
                                        <div className="namePlace">
                                            <label>Wpisz swoje imię<br/>
                                                <input type="text" name="name" value={this.state.name}
                                                       placeholder="Krzysztof" className="name"/>
                                            </label>
                                        </div>
                                        <div className="emailPlace">
                                            <label>Wpisz swój mail<br/>
                                                <input type="email" name="email" value={this.state.email}
                                                       placeholder="abc@xyz.pl" className="email"/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="bottomForm">
                                        <label>Wpisz swoją wiadomość<br/>
                                            <textarea className="message" name="message" value={this.state.message}
                                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing
                                                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                      laboris nisi ut aliquip ex ea commodo consequat."/>
                                        </label>
                                    </div>
                                    <div className="submitBtn"><input className="submit" type="submit" value="Wyślij"/></div>
                                </form>
                            </div>
                            <footer className="footer">
                                <div className="footetTitle">Copyright by Coders Lab</div>
                                <div className="socialMedia">
                                    <div className="facebook"></div>
                                    <div className="instagram"></div>
                                </div>
                            </footer>
                        </div>
                    </div>
            </section>
        )
    }
}
