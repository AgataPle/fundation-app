import React, {Component} from 'react';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
// import {ReactComponent as Icon1} from '../assets/Icon-1.svg';
// import {ReactComponent as Icon2} from '../assets/Icon-2.svg';
// import {ReactComponent as Icon3} from '../assets/Icon-3.svg';
// import {ReactComponent as Icon4} from '../assets/Icon-4.svg';
import icon1 from '../assets/Icon.png';
import icon2 from '../assets/Icon2.png';
import icon3 from '../assets/Icon3.png';
import icon4 from '../assets/Icon4.png';


export default class SimpleSteps extends Component {
    render() {
        return (
            <div className="simpleSteps">
                <div>
                    <h2 className="simpleStepsTitle">Wystarczą 4 proste kroki</h2>
                    <div className="decoration"><Decoration/></div>
                </div>
                <div className="simpleStepsInfo">
                    <div>
                        <img src={icon1}/>
                        <h4>Wybierz rzeczy</h4>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div>
                        <img src={icon2}/>
                        <h4>Spakuj je</h4>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div>
                        <img src={icon3}/>
                        <h4>Zdecyduj komu<br/>chcesz pomóc</h4>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div>
                        <img src={icon4}/>
                        <h4>Zamów kuriera</h4>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div>
                    <button>ODDAJ RZECZY</button>
                </div>
            </div>
        );
    }
}
