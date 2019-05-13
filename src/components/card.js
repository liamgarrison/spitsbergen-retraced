import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <div className="card">
      <img src={this.props.imageUrl} height={this.props.height} alt=""/>
        <div className="card-body">
          <h1 className="card-title">{this.props.cardTitle}</h1>
          <p className="card-text">
            {this.props.cardText}
          </p>
        </div>
      </div>
    )
  }
}

export default Card
