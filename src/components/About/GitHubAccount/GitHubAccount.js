import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import {Card} from 'material-ui/Card';
import Repos from './Repos';
import github from './gitSearch.js';
import { Link } from 'react-router';

class Account extends React.Component {
  constructor(){
    super();
    this.state={
      info:{},
      repos:[],
      wait:true
    }
  }

  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  componentDidMount(){
   github.getGithubInfo('MOMO-0902')
    .then((data) => {
      // console.log(data);
      this.setState({
        info:data.user,
        repos:data.repos,
        wait:false,
      })
    });
    console.log(this.state.info)
    console.log(this.state.repos)
  }

  render () {

    let x = <div>
              <h1>正在向github读取数据</h1>
              <CircularProgress />;
             </div>
    let z = <div>
              <div className="userInfo">
                <img src={this.state.info.avatar_url} />
                <ul>
                  <li><b>{this.state.info.followers}</b><br/><span>Followers</span></li>
                  <li><b>{this.state.info.following}</b><br/><span>Following</span></li>
                  <li><b>{this.state.info.public_repos}</b><br/><span>Repos</span></li>
                </ul>
              </div>
              <Repos repos={this.state.repos} />
            </div>

    return(
      <div className="content">
       <Card>
        { this.state.wait ?  x : z}
       </Card>
      </div>
    )
  }
}

Account.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Account;
