import React from 'react'
import Film from './film'

class FilmForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }
  handleClick = (event) => {
    event.preventDefault()

    const passwordField = event.currentTarget.querySelector("#input")
    if (passwordField.value === "SpitsbergenRetraced2017!") {
      passwordField.value = ""
      this.setState({
        loggedIn: true
      })
    }
  }

  render() {
    return (
      <div className="film">
        <h1>Watch the Film</h1>
        <p>
          If you'd like to watch the film, please get in touch and we'll
          share the password with you.
        </p>
        <form className="form-inline" onSubmit={this.handleClick} action="#" method="get">
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              id="input"
            />
            <button type="submit" className="ml-3 btn btn-primary btn-large">
              Watch Film
            </button>
          </div>
        </form>
        {this.state.loggedIn ? <Film/> : ""}

      </div>
    )
  }
}

export default FilmForm
