import React, {Component} from 'react';
import banner from '../assets/Home-Hero-Image.jpg';
import Grid from '@material-ui/core/Grid';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import {
    HashRouter,
    NavLink,
    Link
} from 'react-router-dom';
import {animateScroll as scroll} from "react-scroll";
import NavBar from './Navbar';


export default class HomePageGrid extends Component {
    render() {
        return (
            <div className="containerGrig">

                <Grid item xs={12}>
                    <img className="banner" src={banner}/>
                </Grid>


                <Grid className="rightContentGrid">
                    <Grid item xs={12}>
                        <div className="loginButtons">
                            <Link to="/login" className="loginLink login">Zaloguj</Link>
                            <Link to="/rejestration" className="loginLink makeAccount">Załuż konto</Link>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <NavBar/>
                        {/*<nav className="page-nav page-nav-list">*/}
                        {/*    <HashRouter>*/}
                        {/*        <NavLink to="#" className="linkName start">Start</NavLink>*/}
                        {/*        <NavLink to="#" className="linkName">O co chodzi?</NavLink>*/}
                        {/*        <NavLink to="#" className="linkName">O nas</NavLink>*/}
                        {/*        <NavLink to="#" className="linkName">Fundacja i organizacje</NavLink>*/}
                        {/*        <NavLink to="#" className="linkName lastLink">Kontakt</NavLink>*/}
                        {/*    </HashRouter>*/}

                        {/*</nav>*/}

                    </Grid>
                    <Grid item xs={12}>

                        <div className="platrofmInfo">
                            <div><h2 className="mainInfo">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce
                            </h2></div>
                            <div><Decoration/></div>
                            <div className="infoButton">
                                <Link to="/login" className="toLoginSection btn">ODDAJ<br/>RZECZY</Link>
                                <Link to="/login" className="toLoginSection btn btn1">ZORGANIZUJ<br/>ZBIÓRKĘ</Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>


        )
    }
}

