import React, {Component} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""

        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMsgChange = this.handleMsgChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        });
    };

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };

    handleMsgChange = e => {
        this.setState({
            message: e.target.value
        });
    };

    handleSubmit(event) {
        console.log("Wypełnione dane: " + this.state.name + this.state.email + this.state.message);
        event.preventDefault();
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
                            <form onSubmit={this.handleSubmit}>
                                <div className="topForm">
                                    <div className="namePlace">
                                        <label>Wpisz swoje imię<br/>
                                            <input type="text" name="name" value={this.state.name}
                                                   placeholder="Krzysztof" className="name"
                                                   onChange={this.handleNameChange}/>
                                        </label>
                                    </div>
                                    <div className="emailPlace">
                                        <label>Wpisz swój mail<br/>
                                            <input type="email" name="email" value={this.state.email}
                                                   placeholder="abc@xyz.pl" className="email"
                                                   onChange={this.handleEmailChange}/>
                                        </label>
                                    </div>
                                </div>
                                <div className="bottomForm">
                                    <label>Wpisz swoją wiadomość<br/>
                                        <textarea className="message" name="message" value={this.state.message}
                                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing
                                                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                      laboris nisi ut aliquip ex ea commodo consequat."
                                                  onChange={this.handleMsgChange}
                                        />
                                    </label>
                                </div>
                                <div className="submitBtn"><input className="submit" type="submit" value="Wyślij"/>
                                </div>
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
