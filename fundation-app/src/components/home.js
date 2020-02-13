import React, {Component} from 'react';

import HomePageGrid from './lpGrid';

export default class Home extends Component {
    render() {
        return (
            <div className="landingPage">
                <div className="mainPage">
                    <HomePageGrid/>

                </div>

            </div>
        )
    }
}
