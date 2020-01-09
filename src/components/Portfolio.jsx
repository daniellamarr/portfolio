import React, { Component } from 'react'
import Text from './Text';
import Button from './Button';
import { colors } from '../utils/theme';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.viewMore = portfolio => {
      this.props.viewMore(portfolio);
    }
  }

  render() {
    const imgPath = '../assets/images/jobs/';
    const portfolios = [
      {
        name: 'Warren',
        image: 'warren.png',
        url: 'https://warrenapp.xyz',
        status: 'Development',
        contributions: 'Frontend Web(HTML, CSS, Vanilla Javascript, ReactJS), Backend(NodeJS, MongoDB), Mobile: iOS and Android(React Native)',
        description: 'Warren is a platform that makes it easier for users to invest in a range of assets, from money market funds to physical assets. Users can invest, monitor your investments and redeem rewards on your investments easily from our app.'
      },
      {
        name: 'Core HQ',
        image: 'corehq.png',
        url: 'https://coreglobalhq.com',
        status: 'Production',
        contributions: 'Frontend Web(HTML, CSS, Javascript)',
        description: 'Core HQ is a private investment group focused on finding and implementing solutions that improve the quality of human life globally.'
      },
      {
        name: 'Qarooh',
        image: 'qarooh.png',
        url: 'https://qarooh-staging.herokuapp.com',
        status: 'Development',
        contributions: 'Frontend Web(ReactJS), Backend(Firebase Cloud Functions, NodeJS)',
        description: 'Qarooh is a platform that helps you advertise on cars in your city and also get your message seen by millions of people.\nCurrently, the dashboard is still in development, however the website is live but expecting a few modifications.'
      },
      {
        name: 'Rateme',
        image: 'rateme.png',
        url: '',
        status: 'Development',
        contributions: 'Mobile: iOS and Android(React Native), Backend(NodeJS, PostgreSQL)',
        description: 'RateMe.ng is Nigeria\'s first multimedia, social networking app, where users can upload media contents, while other users rate it by either liking or disliking the Post.'
      },
    ];
    return (
      portfolios.map((portfolio, index) => (
        <div className="portfolio" key={index}>
          <div className="job" style={{ backgroundImage: `url(${imgPath}${portfolio.image})` }} />
          <div className="overflow" onPointer>
            <Text
              color={colors.white}
              size="20px"
              style={{
                letterSpacing: '0.2em',
                marginBottom: 10
              }}
            >
              {portfolio.name}
            </Text>
            <Button bgColor={colors.white} color={colors.black} size="small" onClick={() => this.viewMore(portfolio)}>
              VIEW
            </Button>
          </div>
        </div>
      ))
    )
  }
}
