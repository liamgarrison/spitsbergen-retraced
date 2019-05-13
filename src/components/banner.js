import React from 'react'
import logoWhite from '../images/logo/portrait_white.png';


class Banner extends React.Component {
  render() {
    return (
      <div className="home-banner">
        <div className="content">
          <div className="image-wrapper">
            <img src={logoWhite} alt="Spitsbergen Retraced Logo" />
          </div>
          <div className="scroll-more">
            <p>Scroll for more</p>
            <i className="fas fa-arrow-down " />
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
