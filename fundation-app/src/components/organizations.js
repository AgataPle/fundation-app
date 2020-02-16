import React, {Component} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';


export default class Organizations extends Component {
    render() {
        return (
            <div className="organizationsContainer">
                <div className="organizationsContent">
                    <div><h2 className="organizationsTitle">Komu pomagamy?</h2></div>
                    <div className="organizationsDeco"><Decoration/></div>
                    <div className="organizationOption">
                        <ul className="ogranizationsTypes">
                            <li className="fundations">Fundacjom</li>
                            <li className="organizations">Organizacjom<br/>pozarządowym</li>
                            <li className="local">Lokalnym<br/>zbiórkom</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
