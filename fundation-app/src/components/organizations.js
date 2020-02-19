import React, {Component} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import OrganizationTypes from './organizationTypes';


export default class Organizations extends Component {
    render() {
        return (
            <section className="organizationsContainer">
                <div className="container">
                    <div><h2 className="organizationsTitle">Komu pomagamy?</h2></div>
                    <div className="organizationsDeco"><Decoration/></div>
                    <div className="organizationOption">
                        <div className="ogranizationsTypes">
                            <button className="btnOrg fundations">Fundacjom</button>
                            <button className="btnOrg organizations">Organizacjom<br/>pozarządowym</button>
                            <button className="btnOrg local">Lokalnym<br/>zbiórkom</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
