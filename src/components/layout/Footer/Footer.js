import React from 'react';
import PropTypes from 'prop-types';
import octocat from '../../../assets/images/octocat.png';
import '../../scss/layout/footer.scss';
import ThemeColorContext from '../../../context/ThemeContext';


const Footer = ({ footerData }) => {
  return (
    <ThemeColorContext.Consumer>
      {
          ({ theme }) => (
            footerData.map((
              {
                footerText1, authorName, footerText, footerHref, github, githubHref
              }
            ) => (
              <footer className={`section_header ${theme ? 'text_light' : 'text_dark'} `} key={footerText1}>
                <div className="container">
                  <div className="footer_title">
                    {footerText1}
                  </div>
                  <div className="footer_subtitle">
                    {authorName}
                  </div>
                  <div className="footer_title">
                    {footerText}
                  </div>
                  <div className="footer_subtitle">
                    <a className="footer_link" href={footerHref}>Layout</a>
                  </div>
                  <div className="footer_title">
                    {github}
                  </div>
                  <div className="footer_subtitle">
                    <a className="footer_link" href={githubHref}>
                      <img className="footer_img" src={octocat} alt="Icon" />
                    </a>
                  </div>
                </div>
              </footer>
            )))
        }
    </ThemeColorContext.Consumer>
  );
};
Footer.propTypes = {
  footerData: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string
    )
  ).isRequired,

};

export default Footer;
