import React from 'react';
import '../../scss/layout/header.scss';
import PropTypes from 'prop-types';


const Header = ({
  topHref, topHref1, topHref2, topHref3, headerButton, headerButtonHref
}) => {
  return (
    <>
      <header className="header">
        <div className="container" id="main">
          <div className="header_inner">
            <div className="header_logo">MoGo</div>
            <nav>
              <ul className="menu-main">
                <a className="nav_link" href={`#${topHref}`}>Home</a>
                <a className="nav_link" href={`#${topHref1}`}>About</a>
                <a className="nav_link" href={`#${topHref2}`}>Services</a>
                <a className="nav_link" href={`#${topHref3}`}>Design</a>
              </ul>
            </nav>
            <button className="nav_toggle" type="button">
              <span className="nav_toggle_item">Menu</span>
            </button>
          </div>
        </div>
      </header>
      <div className="intro" id="intro">
        <div className="container">
          <div className="intro_inner">
            <h2 className="intro_subtitle">Creative Template</h2>
            <h1 className="intro_title">Welcome to MoGo</h1>
            <a className="button" href={`#${headerButtonHref}`}>{headerButton}</a>
          </div>
        </div>
        <div className="intro_slider">
          <div className="container">
            <div className="slider_inner">
              <div className="slider_item">
                <span className="slider_number">01</span>
                <span className="slider_text"> Intro</span>
              </div>
              <div className="slider_item">
                <span className="slider_number">02</span>
                <span className="slider_text"> Work</span>
              </div>
              <div className="slider_item">
                <span className="slider_number">03</span>
                <span className="slider_text"> About</span>
              </div>
              <div className="slider_item">
                <span className="slider_number">04</span>
                <span className="slider_text"> Contacts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
Header.propTypes = {
  topHref: PropTypes.string,
  topHref1: PropTypes.string,
  topHref2: PropTypes.string,
  topHref3: PropTypes.string,
  headerButton: PropTypes.string,
  headerButtonHref: PropTypes.string,

};
Header.defaultProps = {
  topHref: '',
  topHref1: '',
  topHref2: '',
  topHref3: '',
  headerButton: '',
  headerButtonHref: '',

};
export default Header;
