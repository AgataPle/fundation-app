import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Button extends Component {
    render() {
        return (
            <div className="infoButton uniwersalBtn">
                <Link to="/login" className="toLoginSection btn">ODDAJ<br/>RZECZY</Link>
            </div>
        )
    }
}
