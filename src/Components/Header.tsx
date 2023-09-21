import React, { Component } from 'react';

interface HeaderProps {
    fullName: string;
    tagLine: string;
}

class Header extends Component<HeaderProps> {
    render() {
        const { fullName, tagLine } = this.props;

        return (
            <>
            <header id="header">
                <div className="container">

                <h1 className="cursor-pointer">{ fullName }</h1>
                <h2>{tagLine}</h2>

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><a className="cursor-pointer nav-link active">Home</a></li>
                    <li><a className="cursor-pointer nav-link">About</a></li>
                    <li><a className="cursor-pointer nav-link">Resume</a></li>
                    <li><a className="cursor-pointer nav-link">Services</a></li>
                    <li><a className="cursor-pointer nav-link">Portfolio</a></li>
                    <li><a className="cursor-pointer nav-link">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                <div className="social-links">
                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

                </div>
            </header>
            </>
        )
    };
};

export default Header;