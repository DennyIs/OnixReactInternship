import React from 'react';
import '../../assets/components/app/App.css';
import rect1 from '../../assets/components/img/rect1.png';
import serv1 from '../../assets/components/img/serv1.png';
import serv2 from '../../assets/components/img/serv2.png';
import serv3 from '../../assets/components/img/serv3.png';
import serv4 from '../../assets/components/img/serv4.png';
import alarm from '../../assets/components/img/alarm.png';
import line_graph from '../../assets/components/img/line_graph.png';
import computer from '../../assets/components/img/computer.png';
import book from '../../assets/components/img/book.png';
import home from '../../assets/components/img/home.png';
import image from '../../assets/components/img/image.png';
import picture from '../../assets/components/img/picture.png';
import equalizer from '../../assets/components/img/equalizer.png';
import bullseye from '../../assets/components/img/bullseye.png';
import pin from '../../assets/components/img/pin.png';
import ipad from '../../assets/components/img/ipad.png';
import iphone from '../../assets/components/img/iphone.png';
import octocat from '../../assets/components/img/octocat.png';
import Biography from '../biography/Biography'
import Weather from '../weather/Weather'


const top_menu = 'Home',
top_menu1 = 'About',
top_menu2 = 'Services',
top_menu3 = 'Design';

const top_menu_href = 'main',
top_menu_href1 = 'about',
top_menu_href2 = 'services',
top_menu_href3 = 'design';

const header_button = 'Learn More',
header_button_href = 'about;'

const footer_text = 'Original layout',
footer_href = 'http://psd-html-css.ru/templates/mogo-besplatnyy-psd-shablon-lendingovoy-stranicy',
footer_text1 = 'Designed by',
author_name = 'DENIS KONONCHENKO',
github = 'GitHub',
github_href = 'https://github.com/DennyIs/OnixReactInternship';




function App() {
  return (
    <div className="App">
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
    <section className="section" id="#biography">
        <div className="container">
            <div className="section_header">
                <h3 className="section_subtitle">Biography</h3>
                <h2 className="section_title">Story about me</h2>
                <div className="section_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.</p>
                </div>
            </div>
            <Biography/>
        </div>
    </section>
        <section className="section" id="#about">
            <div className="container">
                <div className="section_header">
                    <h3 className="section_subtitle">What we do</h3>
                    <h2 className="section_title">Story about us</h2>
                    <div className="section_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="about">
                    <div className="about_item">
                        <div className="about_image">
                            <img src={serv3} alt="Services"/>
                        </div>
                        <div className="about_text">super team</div>
                    </div>
                    <div className="about_item">
                        <div className="about_image">
                            <img src={serv1} alt="Services"/>
                        </div>
                        <div className="about_text">super team</div>
                    </div>
                    <div className="about_item">
                        <div className="about_image">
                            <img src={serv2} alt="Services"/>
                        </div>
                        <div className="about_text">super team</div>
                    </div>
                </div>
            </div>

      </section>
      <section className="section" id="services">
        <div className="container">

            <div className="section_header">
                <h3 className="section_subtitle">We work with</h3>
                <h2 className="section_title">Amazing Services</h2>
            </div>
              <div className="services">

                <div className="services_item">
                    <img className="services_img" src={alarm} alt="Icon"/>
                    <div className="services_title">Photography</div>
                    <div className="services_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor.</div>
                </div>

                <div className="services_item">
                    <img className="services_img" src={line_graph} alt="Icon"/>
                    <div className="services_title">Web Design</div>
                    <div className="services_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.</div>
                </div>

                <div className="services_item">
                    <img className="services_img" src={computer} alt="Icon"/>
                    <div className="services_title">Creativity</div>
                    <div className="services_text">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                </div>
              </div>
            <hr/>
              <div className="services">

                <div className="services_item">
                    <img className="services_img" src={book} alt="Icon"/>
                    <div className="services_title">SEO</div>
                    <div className="services_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                </div>

                <div className="services_item">
                    <img className="services_img" src={home} alt="Icon"/>
                    <div className="services_title">Css/HTML</div>
                    <div className="services_text">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                </div>

                <div className="services_item">
                    <img className="services_img" src={image} alt="Icon"/>
                    <div className="services_title">Digital</div>
                    <div className="services_text">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                </div>
              </div>
            </div>
    </section>
    <section className="section section--devices" id="design">
        <div className="devices">
            <div className="container">
                <div className="section_header">
                    <h3 className="section_subtitle">For all devices</h3>
                    <h2 className="section_title">Unique design</h2>
                </div>
                <div className="devices">
                    <img className="devices_img" src={ipad} alt="Icon"/>
                    <img className="devices_img devices_img--iphone" src={iphone} alt="Icon"/>
                </div>
            </div>
        </div>
    </section>
    <section className="section">
         <div className="container">
             <div className="section_header">
                 <h3 className="section_subtitle">Service</h3>
                 <h2 className="section_title">What we do</h2>
                 <div className="section_text">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                         minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                         ex ea commodo consequat.</p>
                 </div>
             </div>
             <div className="what_we_do">
                 <div className="wedo_item">
                     <img src={serv4} alt="Icon"/>
                 </div>
                 <div className="wedo_item">
                     <div className="accordion">
                         <div className="accordion_item active_ac ">
                             <div className="accordion_header">
                                 <img className="accordion_img" src={picture} alt="Icon"/>
                                 <div className="accordion_title">Photography</div>
                             </div>
                             <div className="accordion_text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                         </div>
                         <div className="accordion_item">
                             <div className="accordion_header">
                                 <img className="accordion_img" src={equalizer} alt="Icon"/>
                                 <div className="accordion_title">Creativity</div>
                             </div>
                             <div className="accordion_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

                         </div>
                         <div className="accordion_item">
                             <div className="accordion_header">
                                 <img className="accordion_img" src={bullseye} alt="Icon"/>
                                 <div className="accordion_title">Web Design</div>
                                 <div className="accordion_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
    </section>
        <section>
            <Weather/>
        </section>
    <section className="section">
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
                {footer_text1} 
            </p>
            <h2>
                {author_name}
            </h2>   
        </div>  
        <div className="footer title">
            <p>
                {footer_text}
            </p>
            <a href={footer_href}>Layout</a>   
        </div>  
        <div className="footer title">
            <p>
                {github}
            </p>
            <h2>
                <a href={github_href}><img src={octocat} alt="Icon"/></a>   
            </h2>   
        </div> 
    </div>
    </footer>  
    </div>

  );
}

export default App;
