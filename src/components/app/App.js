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
import Biography from './Biography/Biography'
import Weather from './Weather/Weather'
import Header from "../Header";
import Footer from "../Footer";




export default function App() {
  return (
    <div className="App">
        <Header/>
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
    <Footer/>
    </div>

  );
}


