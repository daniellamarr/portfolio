import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Text from '../components/Text';
import Header from '../components/Header';
import { colors } from '../utils/theme';
import Button from '../components/Button';
import Twitter from '../assets/icons/Twitter';
import Github from '../assets/icons/Github';
import LinkedIn from '../assets/icons/LinkedIn';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import WhiteLogo from '../assets/images/logo.jpg';
import Circle from '../assets/images/circle.png';
import Lamarr from '../assets/images/lamarr2.jpg';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      portfolio: {},
      loadingOverlay: true
    }

    this.viewMore = portfolio => {
      this.setState({
        modalVisible: true,
        portfolio
      });
    }

    this.componentDidMount = () => {
      window.onload = () => {
        this.setState({ loadingOverlay: false });
      }
    }
  }
  render() {
    const experiences = [
      {
        role: 'Software Engineer',
        date: 'December 2018 - Present',
        company: 'Andela'
      },
      {
        role: 'Software Engineer',
        date: 'June 2019 - November 2019',
        company: 'VenueX'
      },
      {
        role: 'Software Engineer',
        date: 'November 2018',
        company: 'PATRICIA TECHNOLOGIES LIMITED'
      },
      {
        role: 'Web Instructor',
        date: 'July 2018 - August 2018',
        company: 'Co-Creation Hub'
      },
      {
        role: 'Software Engineer/ Web Instructor',
        date: 'March 2018 - July 2018',
        company: 'Ocean Digits Technologies Limited'
      },
      {
        role: 'Software Engineer',
        date: 'July 2016 - September 2017',
        company: 'Surm Global Limited'
      }
    ]
    return (
      <section id="container">
        <Header />
        <main>
          <section id="home">
            <div className="home-text">
              <Text
                fontFamily="secondary"
                size="30px"
                style={{
                  lineHeight: '40px',
                  letterSpacing: '0.2em'
                }}
              >
                I am<br /> Daniel Anyaegbu
              </Text>
              <Text
                color={colors.grayAA}
                style={{
                  lineHeight: '50px',
                  letterSpacing: '0.2em'
                }}
              >
                Software Engineer
              </Text>
              <Text
                color={colors.black}
                style={{
                  width: '500px',
                  lineHeight: '30px',
                  letterSpacing: '0.15em'
                }}
              >
                I am an enthusiastic software engineer
                with about 3 years of experience in the
                fields of website development and mobile development
              </Text>
              <Button
                size="small"
                bgColor={colors.black}
                style={{
                  marginTop: '20px',
                  letterSpacing: '0.2em'
                }}
              >
                HIRE ME
              </Button>
              <div className="socials">
                <a target="_blank" href="https://twitter.com/thedaniellamarr">
                  <Twitter />
                </a>
                <a target="_blank" href="https://github.com/daniellamarr">
                  <Github />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/daniel-anyaegbu-7a1405163/">
                  <LinkedIn />
                </a>
              </div>
            </div>
            <div className="home-image" />
            <div className="left-circle">
              <img src={Circle} />
            </div>
            <div className="right-circle">
              <img src={Circle} />
            </div>
          </section>
          <section id="experience">
            <div className="header-title">
              <Text
                bold
                style={{
                  letterSpacing: '0.4em'
                }}
                size="25px"
              >
                EXPERIENCE
              </Text>
            </div>
            <div className="experience-list">
              {experiences.map((experience, index) => (
                <Experience key={index} experience={experience} />
              ))}
            </div>
          </section>
          <section id="skills">
            <div className="header-title">
              <Text
                color={colors.white}
                bold
                style={{
                  letterSpacing: '0.4em'
                }}
                size="25px"
              >
                SKILLS
              </Text>
            </div>
            <div className="skill-list">
              <Skill />
            </div>
          </section>
          <section id="portfolio">
            <div className="header-title">
              <Text
                bold
                style={{
                  letterSpacing: '0.4em'
                }}
                size="25px"
              >
                PORTFOLIO
              </Text>
            </div>
            <div className="portfolio-list">
              <Portfolio viewMore={this.viewMore} />
            </div>
          </section>
          <div className="background">
            <div className="slant">
              <div className="slant-inner">
                <Text size="25px" style={{letterSpacing: 10}} color={colors.black}>
                  GET IN TOUCH WITH ME
                </Text>
                <Text size="14px" style={{letterSpacing: 3}} color={colors.white}>
                  DON'T BE A STRANGER
                </Text>
              </div>
            </div>
            <div className="image"></div>
          </div>
        </main>
        {this.state.modalVisible &&
        <Modal close={() => this.setState({ modalVisible: false })}>
          <div className="modal-content">
            <div className="modal-portfolio">
              <div className="portfolio-image" style={{ backgroundImage: `url(${require(`../assets/images/jobs/${this.state.portfolio.image}`)}` }}></div>
              <div className="portfolio-details">
                <Text color={colors.white} size="25px" style={{ marginBottom: 20 }}>
                  {this.state.portfolio.name}
                </Text>
                <Text color={colors.white} size="15px" style={{ marginBottom: 20, letterSpacing: 0.5, lineHeight: '30px' }}>
                  {this.state.portfolio.description}
                </Text>
                <Text color={colors.white} size="13px" style={{ marginBottom: 20, letterSpacing: 0.5 }}>
                  Status: {this.state.portfolio.status}
                </Text>
                <Text color={colors.white} size="13px" style={{ marginBottom: 20, letterSpacing: 0.5 }}>
                  Technologies Used: {this.state.portfolio.contributions}
                </Text>
                {this.state.portfolio.url &&
                  <a href={this.state.portfolio.url} target="_blank">
                    <Button size="small" bgColor={colors.white} color={colors.black}>See Website</Button>
                  </a>
                }
              </div>
            </div>
          </div>
        </Modal>}
        <Footer />
      </section>
    )
  }
}
