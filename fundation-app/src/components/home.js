import React, {Component} from 'react';

import HomeThreeColumns from './homeThreeColumns';
import SimpleSteps from './simpleSteps';
import AboutUs from './aboutUs';


import Section from './Section';

import TopPage from './topPage2';
import OrganizationContainer from "./OrganizationContainer";
import Form from './Form';

export default class Home extends Component {
    render() {
        return (
            <div>
                <TopPage/>
                <HomeThreeColumns/>
                <SimpleSteps/>
                <AboutUs/>

                <OrganizationContainer/>
                <Form/>
                <div className="scrollTest">

                    <Section
                        dark={true}
                        id="section1"
                    />
                    <Section
                        dark={false}
                        id="section2"
                    />
                    <Section
                        dark={true}
                        id="section3"
                    />
                    <Section
                        dark={false}
                        id="section4"
                    />
                    <Section
                        dark={true}
                        id="section5"
                    />
                </div>
            </div>
        )
    }
}
