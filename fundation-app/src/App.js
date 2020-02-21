import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';
import Home from './components/home';
import Login from './components/Login';

import './scss/main.scss';


export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                </div>

            </Router>
        )
    }
}
