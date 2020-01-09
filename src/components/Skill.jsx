import React, { Component } from 'react'
import Text from './Text';
import { colors } from '../utils/theme';

export default class Skill extends Component {
  render() {
    const skills = [
      {
        language: 'JavaScript',
        image: 'assets/images/skills/javascript.png'
      },
      {
        language: 'PHP',
        image: 'assets/images/skills/php.png'
      },
      {
        language: 'Python',
        image: 'assets/images/skills/py.png'
      },
      {
        language: 'React',
        image: 'assets/images/skills/react.png'
      },
      {
        language: 'Node JS',
        image: 'assets/images/skills/nodejs.png'
      },
      {
        language: 'React Native',
        image: 'assets/images/skills/react.png'
      },
      {
        language: 'Express JS',
        image: 'assets/images/skills/expressjs.jpeg'
      },
      {
        language: 'Flask',
        image: 'assets/images/skills/flask.png'
      },
      {
        language: 'Mongo DB',
        image: 'assets/images/skills/mongo.png'
      },
      {
        language: 'PostgreSQL',
        image: 'assets/images/skills/postgresql.png'
      },
      {
        language: 'Firebase',
        image: 'assets/images/skills/firebase.png'
      }
    ]
    return (
      skills.map((skill, index) => (
        <div key={index} className="skill">
          <img src={skill.image} />
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
