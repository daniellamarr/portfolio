import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div id="modal">
        <div className="close" onClick={this.props.close}>X<br/><span>Close</span></div>
        {this.props.children}
      </div>
    )
  }
}
