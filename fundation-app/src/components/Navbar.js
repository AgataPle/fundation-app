import React, {Component} from "react";
import {Link, animateScroll as scroll} from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <button className="nav-item">
                            <Link
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}

                                duration={500}
                            >
                                Start
                            </Link>
                        </button>
                        <button className="nav-item">
                            <Link
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}

                                duration={500}
                            >
                                O co chodzi?
                            </Link>
                        </button>
                        <button className="nav-item">
                            <Link
                                activeClass="active"
                                to="section3"
                                spy={true}
                                smooth={true}

                                duration={500}
                            >
                                O nas
                            </Link>
                        </button>
                        <button className="nav-item">
                            <Link
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}

                                duration={500}
                            >
                                Fundacja i organizacje
                            </Link>
                        </button>
                        <button className="nav-item">
                            <Link
                                activeClass="active"
                                to="section5"
                                spy={true}
                                smooth={true}

                                duration={500}
                            >
                                Kontakt
                            </Link>
                        </button>
                    </ul>
                </div>
            </nav>
        );
    }
}
