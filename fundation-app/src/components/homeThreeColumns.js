import React, {Component} from 'react';

export default class HomeThreeColumns extends Component {
    render() {
        return (
            <div className="infoContaner">
                <div className="infoColumn infoColumnFirst">
                    <h2 className="statNumber">10</h2>
                    <p className="statInfo">ODDANYCH WORKÓW</p>
                    <p className="statDescription">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.</p>
                </div>
                <div className="infoColumn infoColumnSecond">
                    <h2 className="statNumber">5</h2>
                    <p className="statInfo">WSPARTYCH ORGANIZACJI</p>
                    <p className="statDescription">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.</p>
                </div>
                <div className="infoColumn">
                    <h2 className="statNumber">7</h2>
                    <p className="statInfo">ZORGANIZOWANY ZBIÓREK</p>
                    <p className="statDescription">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.</p>
                </div>
            </div>
        )
    }
}
