import React, {Component} from 'react';

import HomePageGrid from './topPage';
import HomeThreeColumns from './homeThreeColumns';
import SimpleSteps from './simpleSteps';

import Section from './Section';
import dummyText from './DummyText';

export default class Home extends Component {
    render() {
        return (
            <div className="landingPage">
                <div className="mainPage">
                    <HomePageGrid/>

                </div>
                <HomeThreeColumns/>
                <SimpleSteps/>
                <div className="scrollTest">

                    <Section
                        title="Section 1"
                        subtitle={dummyText}
                        dark={true}
                        id="section1"
                    />
                    <Section
                        title="Section 2"
                        subtitle={dummyText}
                        dark={false}
                        id="section2"
                    />
                    <Section
                        title="Section 3"
                        subtitle={dummyText}
                        dark={true}
                        id="section3"
                    />
                    <Section
                        title="Section 4"
                        subtitle={dummyText}
                        dark={false}
                        id="section4"
                    />
                    <Section
                        title="Section 5"
                        subtitle={dummyText}
                        dark={true}
                        id="section5"
                    />
                </div>
            </div>
        )
    }
}
