import React, { PropTypes } from 'react';
import GithubAccount from './GitHubAccount/GitHubAccount';
import Echarts from './Echarts/Echarts.js'

class About extends React.Component {
  render () {

    return(
      <div>

        <GithubAccount />

        <Echarts />


        </div>

    )
  }
}
export default About;
