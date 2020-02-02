import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { colors } from '../utils/theme';

export default class Header extends Component {
  render() {
    const links = [
      { text: 'Resume', to: '/resume' },
      { text: 'Experience', to: '#experience' },
      { text: 'Portfolio', to: '#portfolio' }
    ];
    const linkStyle = {
      color: colors.primary,
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: 700,
      letterSpacing: 2
    };
    return (
      <header>
        <Logo type="image" />
        <nav>
          <ul>
            {links.map((link, index) => {
              if (link.to === '/resume') {
                return (
                  <li key={index}>
                    <a href="https://drive.google.com/file/d/1twhfJP59bPjK3JgmbPxhbVFn-4mPpIj_/view?usp=sharing" style={linkStyle} target="_blank">
                      {link.text}
                    </a>
                  </li>
                )
              }
              return (
                <li key={index} className="scroll-item">
                  <a
                    style={linkStyle}
                    href={link.to}
                  >
                    {link.text}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    )
  }
}
