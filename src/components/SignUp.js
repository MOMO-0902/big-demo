import React, { PropTypes }from 'react';
import { Link } from 'react-router';
class SignUp extends React.Component {
  render(){

    return(
      <div>
      <h1>signup</h1>
      {this.props.children}

    </div>
    )
  }
}

export default SignUp;
