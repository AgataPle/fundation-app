import React, {Component} from 'react';
import banner from '../assets/Home-Hero-Image.jpg';
import Grid from '@material-ui/core/Grid';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import {Link} from 'react-router-dom';
import NavBar from './Navbar';
import people from "../assets/people2.jpg";
import LoginButtons from './LoginButtons';

export default class TopPage extends Component {
    render() {
        return (
            <section className="topSection">
                <div className="container topSectionContainer">
                    <div className="leftTop">
                        <div className="topPageImg">
                            <img className="banner1" src={banner}/>
                        </div>
                    </div>
                    <div className="rightTop">
                        <LoginButtons/>
                        <NavBar/>
                        <div className="platrofmInfo">
                            <div><h2 className="mainInfo">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane
                                ręce
                            </h2></div>
                            <div><Decoration/></div>
                            <div className="infoButton">
                                {/*<Link to="/login" className="toLoginSection btn">ODDAJ<br/>RZECZY</Link>*/}
                                {/*<Link to="/login" className="toLoginSection btn btn1">ZORGANIZUJ<br/>ZBIÓRKĘ</Link>*/}
                                <button className="topPageButton"><Link to="/login" className="topPageLink">ODDAJ<br/>RZECZY</Link>
                                </button>
                                <button className="topPageButton"><Link to="/login"
                                                                        className="topPageLink">ZORGANIZUJ<br/>ZBIÓRKĘ</Link>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        )
    }
}
