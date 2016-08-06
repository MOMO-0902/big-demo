import React, { PropTypes } from 'react';
import { Link } from 'react-router';
class Login extends React.Component {
  render(){

    return(
      <div>
      <h1>login</h1>
      {this.props.children}

    </div>
    )
  }
}

export default Login;
