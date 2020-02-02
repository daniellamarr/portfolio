import React, { Component } from 'react'
import Text from './Text';
import { colors } from '../utils/theme';

export default class Skill extends Component {
  render() {
    const skills = [
      {
        language: 'JavaScript',
        image: 'javascript.png'
      },
      {
        language: 'PHP',
        image: 'php.png'
      },
      {
        language: 'Python',
        image: 'py.png'
      },
      {
        language: 'React',
        image: 'react.png'
      },
      {
        language: 'Node JS',
        image: 'nodejs.png'
      },
      {
        language: 'React Native',
        image: 'react.png'
      },
      {
        language: 'Express JS',
        image: 'expressjs.jpeg'
      },
      {
        language: 'Flask',
        image: 'flask.png'
      },
      {
        language: 'Mongo DB',
        image: 'mongo.png'
      },
      {
        language: 'PostgreSQL',
        image: 'postgresql.png'
      },
      {
        language: 'Firebase',
        image: 'firebase.png'
      }
    ]
    return (
      skills.map((skill, index) => (
        <div key={index} className="skill">
          <img src={require(`../assets/images/skills/${skill.image}`)} />
          <Text
            color={colors.white}
            style={{
              letterSpacing: '0.2em'
            }}
          >
            {skill.language}
          </Text>
        </div>
      ))
    )
  }
}
