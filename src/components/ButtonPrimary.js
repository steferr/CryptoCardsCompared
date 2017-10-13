import React, { Component } from 'react';
import { GREY_MEDIUM } from '../utilities/constants'
import { primaryButtonStyle, primaryButtonHoverStyle } from '../utilities/styles'
  // onTouchStart={this.handleTouchStart.bind(this)}
export default class ButtonPrimary extends Component {
  constructor(props) {
    super(props)
    this.state = { over : false}
  }
  handleMouseEnter() {
    this.setState({over: true})
    console.log('onMouseEnter');
  }
  handleMouseLeave() {
    this.setState({over: false})
  }
  getStyles(){
    if (this.state.over)
      return primaryButtonHoverStyle
    else return primaryButtonStyle
  }
  render() {

  return (

        <div onMouseEnter = {this.handleMouseEnter.bind(this)} onMouseLeave = {this.handleMouseLeave.bind(this)} style={this.getStyles()}>
          {this.props.label}
        </div>
  )
  }
}
