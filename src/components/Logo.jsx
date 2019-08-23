import React, { Component } from 'react';
import Text from './Text';
import { colors } from '../utils/theme';

export default class Logo extends Component {
  render() {
    const { size, type } = this.props;
    return (
      <div className="logo">
        {type === 'text'
          ? <Text
              color={this.props.logoColor || colors.black}
              size={size || "25px"}
            >
            Daniel Lamarr
          </Text>
          : <img
            src="assets/images/logo.png"
            width={size || "50px"}
          />
        }
      </div>
    )
  }
}
