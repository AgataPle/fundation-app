import React, {Component} from 'react';
import banner from '../assets/Home-Hero-Image.jpg';
import Grid from '@material-ui/core/Grid';
import {ReactComponent as Decoration} from '../assets/Decoration.svg';
import {
    HashRouter,
    NavLink,
} from 'react-router-dom';


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
                            <a className="loginLink login">Zaloguj</a>
                            <a className="loginLink makeAccount">Załuż konto</a></div>
                    </Grid>
                    <Grid item xs={12}>

                        <nav className="page-nav page-nav-list">
                            <HashRouter>
                                <NavLink to="#" className="linkName start">Start</NavLink>
                                <NavLink to="#" className="linkName">O co chodzi?</NavLink>
                                <NavLink to="#" className="linkName">O nas</NavLink>
                                <NavLink to="#" className="linkName">Fundacja i organizacje</NavLink>
                                <NavLink to="#" className="linkName lastLink">Kontakt</NavLink>
                            </HashRouter>

                        </nav>

                    </Grid>
                    <Grid item xs={12}>

                        <div className="platrofmInfo">
                            <div><h2 className="mainInfo">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce
                            </h2></div>
                            <div><Decoration/></div>
                            <div>
                                <button className="btn">ODDAJ<br/>RZECZY</button>
                                <button className="btn btn1">ZORGANIZUJ<br/>ZBIÓRKĘ</button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>


        )
    }
}

