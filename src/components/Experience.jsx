import React, { Component } from 'react'
import Suitcase from '../assets/icons/Suitcase';
import Text from './Text';
import { colors } from '../utils/theme';

export default class Experience extends Component {
  render() {
    const { experience } = this.props;
    return (
      <div className="experience">
        <Suitcase size={50} />
        <div className="details">
          <Text
            color={colors.grayAA}
            size="12px"
          >
            {experience.date}
          </Text>
          <Text
            size="16px"
            bold
          >
            {experience.role}
          </Text>
          <Text
            color={colors.grayAA}
            size="14px"
            bold
          >
            {experience.company.toUpperCase()}
          </Text>
        </div>
      </div>
    )
  }
}
