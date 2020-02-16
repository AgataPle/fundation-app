import React, {Component} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import Button from './button';
import icon1 from '../assets/Icon.png';
import icon2 from '../assets/Icon2.png';
import icon3 from '../assets/Icon3.png';
import icon4 from '../assets/Icon4.png';
import {Link} from "react-router-dom";


export default class SimpleSteps extends Component {
    render() {
        return (
            <div className="simpleSteps" id="section2">
                <div>
                    <h2 className="simpleStepsTitle">Wystarczą 4 proste kroki</h2>
                    <div className="decoration"><Decoration/></div>
                </div>
                <div className="simpleStepsInfo">
                    <div>
                        <img className="icon" src={icon1}/>
                        <h4 className="iconTitle">Wybierz rzeczy</h4>
                        <hr className="horizontalLine"/>
                        <p className="iconInfo">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div>
                        <img className="icon" src={icon2}/>
                        <h4 className="iconTitle">Spakuj je</h4>
                        <hr className="horizontalLine"/>
                        <p className="iconInfo">skorzystaj z worków na śmieci</p>
                    </div>
                    <div>
                        <img className="icon" src={icon3}/>
                        <h4 className="iconTitle">Zdecyduj komu<br/>chcesz pomóc</h4>
                        <hr className="horizontalLine"/>
                        <p className="iconInfo">wybierz zaufane miejsce</p>
                    </div>
                    <div>
                        <img className="icon" src={icon4}/>
                        <h4 className="iconTitle">Zamów kuriera</h4>
                        <hr className="horizontalLine"/>
                        <p className="iconInfo">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className="componentBtn">
                    <Button/>
                </div>
            </div>
        );
    }
}
