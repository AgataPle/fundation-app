import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';
import Home from './components/home';

import './scss/main.scss';


export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/" component={Home}/>
                </div>

            </Router>
        )
    }
}
