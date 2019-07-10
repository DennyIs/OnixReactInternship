import React from 'react';
import './App.css';
import Logo from './img/logo.png';
import rect1 from './img/rect1.png';
import serv1 from './img/serv1.png';
import serv2 from './img/serv2.png';
import serv3 from './img/serv3.png';
import serv4 from './img/serv4.png';
import alarm from './img/alarm.png';
import line_graph from './img/line_graph.png';
import computer from './img/computer.png';
import book from './img/book.png';
import home from './img/home.png';
import image from './img/image.png';
import picture from './img/picture.png';
import equalizer from './img/equalizer.png';
import bullseye from './img/bullseye.png';
import pin from './img/pin.png';
import octocat from './img/octocat.png';
import menu from './js/menu.js';
import collapsible from './js/collapsible/jquery.collapsible.js';


function App() {
  return (
    <div className="App">
     <header className="header">
          <div className="container" id="main">
              <div className="heading clearfix">
                  <img src={Logo} className="logo" alt="Logo"/>
                  <nav>
                      <ul className="menu-main">
                          <li><a href="#main">Home</a></li>
                          <li><a href="#about">About</a></li>
                          <li><a href="#services">Services</a></li>
                          <li><a href="#design">Design</a></li>
                      </ul>
                  </nav>
              </div>
          <div className="titles">
              <div className="titles_first">
                  Creative Template
              </div>
              <h1>
                  Welcome to MoGo
              </h1>
          </div>
          <a className="button" href="#about">Learn more</a>
      </div>
    </header>
    <section id="about">
        <div className="title" id="#about">
            <div>
                What we do
            </div>
            <h2>
                Story about us
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <img src={rect1} alt="rectangle"/>
        </div>  
        <div className="services">
            <div className="services_item">
                <img src={serv3} alt="Services"/>
            </div>
            <div className="services_item">
                <img src={serv1} alt="Services"/>
            </div>
             <div className="services_item">
                <img src={serv2} alt="Services"/>
            </div>
        </div> 
      </section>
      <section id="services">
        <div className="container">
          <div className="title">
            <div>
                We work with
            </div>
            <h2>
                Amazing Services
            </h2>
            <img src={rect1} alt="rectangle"/>
          </div> 
          <div className="services">
            <div className="services_item">
                <img src={alarm} alt="Icon"/>
            </div>
            <div className="services_text">

                <h3>Photography</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="services_item">
                <img src={line_graph} alt="Icon"/>
            </div>
            <div className="services_text">
                <h3>Web Design</h3>
                <p>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="services_item">
                <img src={computer} alt="Icon"/>
            </div>
            <div className="services_text">
                <h3>Creativity</h3>
                <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className="services">
            <div className="services_item">
                <img src={book} alt="Icon"/>
            </div>
            <div className="services_text">
                <h3>SEO</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="services_item">
                <img src={home} alt="Icon"/>
            </div>
            <div className="services_text">
                <h3>Css/HTML</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="services_item">
                <img src={image} alt="Icon"/>
            </div>
            <div className="services_text">
                <h3>Digital</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>                    
        </div> 
    </section>
    <section id="design">
    <div className="devices">
        <div className="title devices_title">
            <div>
                For all devices
            </div>
            <h2>
                Unique design
            </h2>
        </div> 
    </div>    
    </section>
    <section>
         <div className="container">
            <div className="title">
                <div>
                    Service
                </div>
                <h2>
                    What we do
                </h2>
                <img src={rect1} alt="rectangle"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
            </div>  
        
            <div className="what_we_do clearfix">
                <img src={serv4} alt="Icon"/>
                <div id="firstCollapseMenu" className="collapse-container">
                <h2><span className="arrow-r"></span> <img src={picture} alt="Icon"/> Photography</h2>
                <div className="content_slide">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <h2><span className="arrow-r"></span> <img src={equalizer} alt="Icon"/> Creativity</h2>
                <div className="content_slide">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <h2><span className="arrow-r"></span> <img src={bullseye} alt="Icon"/> Web Design</h2>
                <div className="content_slide">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            </div>
            </div>
    </section>
    <section>
        <div className="map">
            <div className="map_content">
               <img src={pin} alt="Icon"/>
               <p>Open map</p> 
               <img src={rect1} alt="Icon"/>
            </div>
        </div>
    </section>
    <footer className="footer">
    <div className="container">
        <div className="footer title">
            <p>
                Designed by 
            </p>
            <h2>
                Denis Kononchenko
            </h2>   
        </div>  
        <div className="footer title">
            <p>
                Original layout
            </p>
            <a href="http://psd-html-css.ru/templates/mogo-besplatnyy-psd-shablon-lendingovoy-stranicy">Layout</a>   
        </div>  
        <div className="footer title">
            <p>
                GitHub
            </p>
            <h2>
                <a href="https://github.com/DennyIs/OnixReactInternship"><img src={octocat} alt="Icon"/></a>   
            </h2>   
        </div> 
    </div>
    </footer>  
    </div>

  );
}

export default App;
