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
      upButton: false,
      downButton: false

    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScroll);
  }

  checkScroll = () => {
    const { upButton, downButton } = this.state;
    const scroll = window.pageYOffset;
    const element = document.getElementById('intro');
    const headerHeight = element.offsetHeight;
    const windowHeight = document.body.scrollHeight - window.innerHeight;
    const updatedUpButton = scroll >= headerHeight;
    const updatedDownButton = scroll <= windowHeight - headerHeight;
    if (updatedUpButton !== upButton || updatedDownButton !== downButton) {
      this.setState({
        upButton: updatedUpButton,
        downButton: updatedDownButton
      });
    }
  };

  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  scrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight - window.innerHeight,
      behavior: 'smooth'
    });
  };

  render() {
    const { children } = this.props;
    const {
      footerText, footerHref, footerText1, authorName, github, githubHref, topHref,
      topHref1, topHref2, topHref3, headerButton, headerButtonHref
    } = this.state;
    const { upButton, downButton } = this.state;

    return (
      <PageView
        upButton={upButton}
        downButton={downButton}
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
        scrollTop={this.scrollTop}
        scrollDown={this.scrollDown}
      />
    );
  }
}
Page.propTypes = {
  children: PropTypes.element.isRequired
};
export default Page;
