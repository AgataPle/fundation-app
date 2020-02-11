import React, {Component} from 'react';
import HomeHeader from './homeHeader';
import HomeThreeColumns from './homeThreeColumns';

export default class Home extends Component {
    render() {
        return (
            <>
                <HomeHeader/>
                <HomeThreeColumns/>
            </>
        )
    }
}
