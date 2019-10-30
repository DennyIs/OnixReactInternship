import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '../../elements/Button/Button';
import '../../scss/pages/home.scss';
import ThemeColorContext from '../../../context/ThemeContext';

const PageView = ({
  page, footerData, headerData, scrollTop, scrollDown, upButton, downButton
}) => {
  return (
    <ThemeColorContext.Consumer>
      {
        ({ theme }) => (
          <div className={` ${theme ? 'bg_light' : 'bg_dark'} `}>
            <Header
              headerData={headerData}
            />
            {upButton && <Button className="btn_up" title="" onButtonClick={scrollTop} /> }
            {downButton && <Button className="btn_down" title="" onButtonClick={scrollDown} />}
            { page }
            <Footer
              footerData={footerData}
              theme={theme}
            />
          </div>
        )
      }
    </ThemeColorContext.Consumer>
  );
};

PageView.propTypes = {
  page: PropTypes.element.isRequired,
  footerData: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string
    )
  ).isRequired,
  headerData: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string
    )
  ).isRequired,
  scrollTop: PropTypes.func,
  scrollDown: PropTypes.func,
  upButton: PropTypes.bool,
  downButton: PropTypes.bool,

};
PageView.defaultProps = {
  scrollTop: undefined,
  scrollDown: undefined,
  upButton: undefined,
  downButton: undefined,

};

export default PageView;
