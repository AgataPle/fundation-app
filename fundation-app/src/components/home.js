import React, {Component} from 'react';

import HomeThreeColumns from './homeThreeColumns';
import SimpleSteps from './simpleSteps';
import AboutUs from './aboutUs';
import Organizations from './organizations';

import LocalCollectionsComponent from './organizationTypes';

import Section from './Section';
import organizationsData from '../data/localCollectionData'

import TopPage from './topPage2';

export default class Home extends Component {
    render() {
        return (
            <div>

                <TopPage/>
                <HomeThreeColumns/>
                <SimpleSteps/>
                <AboutUs/>
                <Organizations/>
                <LocalCollectionsComponent
                    localCollections={organizationsData}/>
                <br/>
                <br/>
                <br/>
                <br/>
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
