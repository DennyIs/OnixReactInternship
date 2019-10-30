import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PageView from './PageView';
import ThemeColorContext from '../../../context/ThemeContext';

function Page(props) {
  const [footerData] = useState([
    {
      footerText: 'Original layout',
      footerHref: 'http://psd-html-css.ru/templates/mogo-besplatnyy-psd-shablon-lendingovoy-stranicy',
      footerText1: 'Designed by',
      authorName: 'DENIS KONONCHENKO',
      github: 'GitHub',
      githubHref: 'https://github.com/DennyIs/OnixReactInternship',
    }
  ]);
  const [headerData] = useState([
    {
      topHref: 'main',
      topHref1: 'about',
      topHref2: 'services',
      topHref3: 'design',
      headerButton: 'Learn More',
      headerButtonHref: 'about;',
    }
  ]);
  const [scrollButton, setScrollButton] = useState({
    upButton: false,
    downButton: false, 
  });
  const [theme, setTheme] = useState(true);
  const { children } = props;

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const checkScroll = () => {
    const { upButton, downButton } = scrollButton;
    const scroll = window.pageYOffset;
    const element = document.getElementById('intro');
    const headerHeight = element.offsetHeight;
    const windowHeight = document.body.scrollHeight - window.innerHeight;
    const updatedUpButton = scroll >= headerHeight;
    const updatedDownButton = scroll <= windowHeight - headerHeight;
    if (updatedUpButton !== upButton || updatedDownButton !== downButton) {
      setScrollButton({
        upButton: updatedUpButton,
        downButton: updatedDownButton
      });
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight - window.innerHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  });

  const { upButton, downButton } = scrollButton;

  return (
    <ThemeColorContext.Provider value={{
      theme,
      toggleTheme
    }}
    >
      <PageView
        upButton={upButton}
        downButton={downButton}
        footerData={footerData}
        headerData={headerData}
        page={children}
        scrollTop={scrollTop}
        scrollDown={scrollDown}
      />
    </ThemeColorContext.Provider>

  );
}
Page.propTypes = {
  children: PropTypes.element.isRequired
};
export default Page;
