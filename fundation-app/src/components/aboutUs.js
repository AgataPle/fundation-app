import React, {Component} from 'react';
import people from '../assets/people2.jpg';
import {ReactComponent as Signature} from '../assets/Signature.svg';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="containerAboutUs" id="section3">
                <div className="aboutUsInfoContainer">
                    <div className="aboutUsTitle">O nas</div>
                    <div className="aboutUsDeco"><Decoration/></div>
                    <div className="aboutUsInfo">Nori grape silver beet broccoli kombu beet greens fava bean potato
                        quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </div>
                    <div className="signature"><Signature/></div>
                </div>

                <div className="aboutUsInfoImg"><img src={people}/></div>

            </div>
        )
    }
}
