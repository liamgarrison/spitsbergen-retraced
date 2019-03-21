import React, { Component } from "react"

import "./style.scss"

class Layout extends Component {
  state = {}
  render() {
    return this.props.children
  }
}

export default Layout
