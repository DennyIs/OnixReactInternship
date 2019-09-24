import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PageView = ({
  page, footerText, footerHref, footerText1, authorName, github, githubHref, topHref,
  topHref1, topHref2, topHref3, headerButton, headerButtonHref
}) => {
  return (
    <>
      <Header
        topHref={topHref}
        topHref1={topHref1}
        topHref2={topHref2}
        topHref3={topHref3}
        headerButton={headerButton}
        headerButtonHref={headerButtonHref}
      />
      { page }
      <Footer
        footerText={footerText}
        footerHref={footerHref}
        footerText1={footerText1}
        authorName={authorName}
        github={github}
        githubHref={githubHref}
      />
    </>
  );
};

PageView.propTypes = {
  page: PropTypes.element.isRequired,
  footerText1: PropTypes.string,
  authorName: PropTypes.string,
  footerText: PropTypes.string,
  footerHref: PropTypes.string,
  github: PropTypes.string,
  githubHref: PropTypes.string,
  topHref: PropTypes.string,
  topHref1: PropTypes.string,
  topHref2: PropTypes.string,
  topHref3: PropTypes.string,
  headerButton: PropTypes.string,
  headerButtonHref: PropTypes.string,

};
PageView.defaultProps = {
  footerText1: '',
  authorName: '',
  footerText: '',
  footerHref: '',
  github: '',
  githubHref: '',
  topHref: '',
  topHref1: '',
  topHref2: '',
  topHref3: '',
  headerButton: '',
  headerButtonHref: '',

};
export default PageView;
