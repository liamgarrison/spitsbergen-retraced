import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <div class="card">
      <img src={this.props.imageUrl} alt=""/>
        <div class="card-body">
          <h1 class="card-title">{this.props.cardTitle}</h1>
          <p class="card-text">
            {this.props.cardText}
          </p>
        </div>
      </div>
    )
  }
}

export default Card
