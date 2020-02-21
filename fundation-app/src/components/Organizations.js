import React, {Component} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';


export default class Organizations extends Component {
    handleOnClick = e => {
        this.props.changeTab(e.target.id);
    };

    render() {
        return (
            <section className="organizationsContainer">
                <div className="container" id="section4">
                    <div><h2 className="organizationsTitle">Komu pomagamy?</h2></div>
                    <div className="organizationsDeco"><Decoration/></div>
                    <div className="organizationOption">
                        <div className="ogranizationsTypes">
                            <button className="btnOrg fundations" id={0} onClick={this.handleOnClick}>Fundacjom</button>
                            <button className="btnOrg organizations" id={1} onClick={this.handleOnClick}>Organizacjom<br/>pozarządowym</button>
                            <button className="btnOrg local" id={2} onClick={this.handleOnClick}>Lokalnym<br/>zbiórkom</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
