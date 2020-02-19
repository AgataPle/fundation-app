import React, {Component} from 'react';
import OneColumn from './oneColumn';

export default class HomeThreeColumns extends Component {
    render() {
        return (
            <section className="infoContaner">

                <div className="container info-container">
                    <OneColumn number={10} title="ODDANYCH RZECZY" desc="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                            enim a elit viverra elementuma. Aliquam erat volutpat."/>
                    <OneColumn number={5} title="WSPARTYCH ORGANIZACJI" desc="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                            enim a elit viverra el ementuma. Aliquam erat volutpat."/>
                    <OneColumn number={7} title="ZORGANIZOWANYCH ZBIÓREK" desc="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                            enim a elit viverra elementuma. Aliquam erat volutpat."/>
                </div>
            </section>
        )
    }
}
