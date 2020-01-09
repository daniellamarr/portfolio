import React, { Component } from 'react';
import { colors, fontFamily as font } from '../utils/theme';

export default class Text extends Component {
  render() {
    const fontSize = this.props.size || '16px';
    const color = this.props.color || colors.black;
    const fontWeight = this.props.bold ? 'bold' : 'normal';
    const fontFamily = font[this.props.fontFamily] || font.primary;
    const { style } = this.props;
    return (
      <p
        style={{
          ...style,
          fontSize,
          color,
          fontWeight,
          fontFamily
        }}
      >
        {this.props.children}
      </p>
    )
  }
}
