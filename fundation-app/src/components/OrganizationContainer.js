import React, {Component} from 'react';
import LocalCollectionsComponent from './LocalCollectionsComponent'
import Organizations from './Organizations'
import organizationsData from '../data/localCollectionData';

class OrganizationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            organizations: organizationsData[0]
        }
    }

    changeCurrentTab = id => {
        this.setState({
            organizations: organizationsData[id]
        });
    };


    render() {
        return (
            <div>
                <Organizations changeTab={this.changeCurrentTab} />
                <LocalCollectionsComponent organizations={this.state.organizations} />
            </div>
        );
    }
}

export default OrganizationContainer;
