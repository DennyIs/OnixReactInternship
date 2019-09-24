import React from 'react';
import PropTypes from 'prop-types';
import octocat from '../../../assets/images/octocat.png';
import '../../scss/layout/footer.scss';


const Footer = ({
  footerText1, authorName, footerText, footerHref, github, githubHref
}) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer title">
          <p>
            {footerText1}
          </p>
          <h2>
            {authorName}
          </h2>
        </div>
        <div className="footer title">
          <p>
            {footerText}
          </p>
          <a className="footer_link" href={footerHref}>Layout</a>
        </div>
        <div className="footer title">
          <p>
            {github}
          </p>
          <h2>
            <a className="footer_link" href={githubHref}><img src={octocat} alt="Icon" /></a>
          </h2>
        </div>
      </div>
    </footer>
  );
};
Footer.propTypes = {
  footerText1: PropTypes.string,
  authorName: PropTypes.string,
  footerText: PropTypes.string,
  footerHref: PropTypes.string,
  github: PropTypes.string,
  githubHref: PropTypes.string,

};
Footer.defaultProps = {
  footerText1: '',
  authorName: '',
  footerText: '',
  footerHref: '',
  github: '',
  githubHref: '',

};
export default Footer;
