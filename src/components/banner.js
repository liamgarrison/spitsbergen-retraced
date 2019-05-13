import React from 'react'
import logoWhite from '../images/logo/portrait_white.png';


class Banner extends React.Component {
  render() {
    return (
      <div class="home-banner">
        <div class="content">
          <div class="image-wrapper">
            <img src={logoWhite} alt="Spitsbergen Retraced Logo" />
          </div>
          <div class="scroll-more">
            <p>Scroll for more</p>
            <i class="fas fa-arrow-down " />
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
