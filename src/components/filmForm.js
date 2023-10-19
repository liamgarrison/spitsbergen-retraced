import React from 'react'
import Film from './film'

class FilmForm extends React.Component {
  render() {
    return (
      <div className="film">
        <h1>Watch the Film</h1>
        <Film/>
      </div>
    )
  }
}

export default FilmForm
