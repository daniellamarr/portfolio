import React, { Component } from 'react'
import Logo from './Logo'
import Text from './Text'
import { colors } from '../utils/theme'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="inner">
          <Logo logoBg="black" size="100px" />
          <Text color={colors.white} size="14px">
            Copyright © 2020. Daniel Lamarr.
          </Text>
          <Text color={colors.white} size="10px">
            Software Engineer, Andela.
          </Text>
        </div>
        <div className="inner">
          <Text color={colors.white} size="10px">
            Phone
          </Text>
          <Text color={colors.white} size="16px">
            +234 813 527 0797
          </Text>
        </div>
        <div className="inner">
          <Text color={colors.white} size="10px">
            Email
          </Text>
          <Text color={colors.white} size="16px">
            danielchidiebele@gmail.com
          </Text>
        </div>
        <div className="inner">
          <Text color={colors.white} size="10px">
            Location
          </Text>
          <Text color={colors.white} size="16px">
            Lagos, Nigeria
          </Text>
        </div>
      </footer>
    )
  }
}
