import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageView from './PageView';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerText: 'Original layout',
      footerHref: 'http://psd-html-css.ru/templates/mogo-besplatnyy-psd-shablon-lendingovoy-stranicy',
      footerText1: 'Designed by',
      authorName: 'DENIS KONONCHENKO',
      github: 'GitHub',
      githubHref: 'https://github.com/DennyIs/OnixReactInternship',
      topHref: 'main',
      topHref1: 'about',
      topHref2: 'services',
      topHref3: 'design',
      headerButton: 'Learn More',
      headerButtonHref: 'about;',
    };
  }

  render() {
    const { children } = this.props;
    const {
      footerText, footerHref, footerText1, authorName, github, githubHref, topHref,
      topHref1, topHref2, topHref3, headerButton, headerButtonHref
    } = this.state;

    return (
      <PageView
        footerText={footerText}
        footerHref={footerHref}
        footerText1={footerText1}
        authorName={authorName}
        github={github}
        githubHref={githubHref}
        topHref={topHref}
        topHref1={topHref1}
        topHref2={topHref2}
        topHref3={topHref3}
        headerButton={headerButton}
        headerButtonHref={headerButtonHref}
        page={children}
      />
    );
  }
}
Page.propTypes = {
  children: PropTypes.element.isRequired
};
export default Page;
