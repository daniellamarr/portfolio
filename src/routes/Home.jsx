import React, { Component } from 'react';
import Text from '../components/Text';
import Logo from '../components/Logo';

export default class Home extends Component {
  render() {
    return (
      <section id="container">
        <Logo type="image" />
        <Text fontFamily="secondary" size="30px">
          I am Daniel Lamarr
        </Text>
      </section>
    )
  }
}
