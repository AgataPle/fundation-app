import React, {Component} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import Button from './button';
import icon1 from '../assets/Icon.png';
import icon2 from '../assets/Icon2.png';
import icon3 from '../assets/Icon3.png';
import icon4 from '../assets/Icon4.png';
import {Link} from "react-router-dom";
import SimpleStep from './simpleStep';


export default class SimpleSteps extends Component {
    render() {
        return (
            <section className="simpleStepsContainer">
                <div className="simpleSteps stepsContainer container" id="section2">
                    <div>
                        <h2 className="simpleStepsTitle">Wystarczą 4 proste kroki</h2>
                        <div className="decoration"><Decoration/></div>
                    </div>
                    <div className="simpleStepsInfo">
                        <div>
                            <img className="icon" src={icon1}/>
                            <SimpleStep simpleStepsTitle="Wybierz rzeczy"
                                        simpleStepsTitleDesc="ubrania, zabawki, sprzęt i inne"/>
                        </div>
                        <div>
                            <img className="icon" src={icon2}/>
                            <SimpleStep simpleStepsTitle="Spakuj je"
                                        simpleStepsTitleDesc="skorzystaj z worków na śmieci"/>
                        </div>
                        <div>
                            <img className="icon" src={icon3}/>
                            <h4 className="iconTitle">Zdecyduj komu<br/>chcesz pomóc</h4>
                            <hr className="horizontalLine"/>
                            <p className="iconInfo">wybierz zaufane miejsce</p>
                        </div>
                        <div>
                            <img className="icon" src={icon4}/>
                            <SimpleStep simpleStepsTitle="Zamów kuriera"
                                        simpleStepsTitleDesc="kurier przyjedzie w dogodnym terminie"/>
                        </div>
                    </div>
                    <div className="componentBtn">
                        <button><Link to="/login" className="uniBtn">ODDAJ<br/>RZECZY</Link></button>
                    </div>
                </div>
            </section>
        );
    }
}
