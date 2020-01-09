import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { colors } from '../utils/theme';

export default class Header extends Component {
  render() {
    const links = [
      { text: 'Resume', to: '/resume' },
      { text: 'Experience', to: '/experience' },
      { text: 'Portfolio', to: '/portfolio' }
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
                    <a href="/assets/misc/resume.pdf" style={linkStyle}>
                      {link.text}
                    </a>
                  </li>
                )
              }
              return (
                <li key={index}>
                  <Link
                    style={linkStyle}
                    to={link.to}
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    )
  }
}
