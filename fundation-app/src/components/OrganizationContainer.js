import React, {Component} from 'react';
import LocalCollectionsComponent from './LocalCollectionsComponent'
import Organizations from './Organizations'

class OrganizationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0
        }
    }

    changeCurrentPage = id => {
        this.setState({
            currentPage: id
        });
    };


    render() {
        return (
            <div>
                <Organizations changePage={this.changeCurrentPage} />
                <LocalCollectionsComponent currentPage={this.state.currentPage} />
            </div>
        );
    }
}

export default OrganizationContainer;
