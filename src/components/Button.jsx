import React, { Component } from 'react';
import { colors } from '../utils/theme';

export default class Button extends Component {
  roundedButton() {
    const { rounded } = this.props;
    let style;
    if (rounded) {
      style = {
        borderRadius: '3px'
      }
    } else {
      style = {
        borderRadius: 0
      }
    }
    return style;
  }

  buttonSize() {
    const { size, width, height } = this.props;
    switch (size) {
      case 'small':
        return {
          width: width || '100px',
          height: height || '30px'
        };
      case 'medium':
        return {
          width: width || '120px',
          height: height || '30px'
        };
      case 'large':
        return {
          width: width || '150px',
          height: height || '50px'
        };
      default:
        return {
          width: width || '200px',
          height: height || '30px'
        }
    }
  }

  render() {
    const backgroundColor = this.props.bgColor || colors.primary;
    const color = this.props.color || colors.white;
    const float = this.props.float || 'none';
    return (
      <button
        style={{
          ...this.roundedButton(),
          ...this.buttonSize(),
          backgroundColor,
          color,
          float
        }}
      >
        {this.props.children}
      </button>
    )
  }
}
