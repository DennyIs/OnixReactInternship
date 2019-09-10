import React from 'react';

export default function Header() {
    const top_menu = 'Home',
        top_menu1 = 'About',
        top_menu2 = 'Services',
        top_menu3 = 'Design';

    const top_menu_href = 'main',
        top_menu_href1 = 'about',
        top_menu_href2 = 'services',
        top_menu_href3 = 'design';

    const header_button = 'Learn More',
        header_button_href = 'about;';
    return (
        <React.Fragment>
        <header className="header">
            <div className="container" id="main">
                <div className="header_inner">
                    <div className="header_logo">MoGo</div>
                    <nav>
                        <ul className="menu-main">
                            <a className="nav_link" href={'#' + top_menu_href}>{top_menu}</a>
                            <a className="nav_link" href={'#' + top_menu_href1}>{top_menu1}</a>
                            <a className="nav_link" href={'#' + top_menu_href2}>{top_menu2}</a>
                            <a className="nav_link" href={'#' + top_menu_href3}>{top_menu3}</a>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
            <div className="intro">
                <div className="container">
                    <div className="intro_inner">
                        <h2 className="intro_subtitle">Creative Template</h2>
                        <h1 className="intro_title">Welcome to MoGo</h1>
                        <a className="button" href={'#' + header_button_href}>{header_button}</a>
                    </div>
                </div>

                <div className="intro_slider">
                    <div className="container">
                        <div className="slider_inner">
                            <div className="slider_item">
                                <span className="slider_number">01</span> Intro
                            </div>
                            <div className="slider_item">
                                <span className="slider_number">02</span> Work
                            </div>
                            <div className="slider_item">
                                <span className="slider_number">03</span> About
                            </div>
                            <div className="slider_item">
                                <span className="slider_number">04</span> Contacts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
    
}