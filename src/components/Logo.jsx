import React, { Component } from 'react';
import Text from './Text';
import { colors } from '../utils/theme';
import LogoWhite from '../assets/images/logo-w.jpg';
import LogoBlack from '../assets/images/logo.jpg';

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
          : this.props.logoBg === 'white' ?
            <img
              src={LogoWhite}
              width={size || "50px"}/>
            :
            <img
              src={LogoBlack}
              width={size || "50px"}/>
        }
      </div>
    )
  }
}
