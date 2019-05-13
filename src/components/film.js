import React from 'react'

class Film extends React.Component {
  render() {
    return (
      <div className="film-wrapper mt-5">
        <iframe
          title="spitsbergen-film"
          src="https://www.youtube.com/embed/Oufm4HtVkMs?rel=0&amp;showinfo=0"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    )
  }
}

export default Film
