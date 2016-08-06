import React from 'react';
import { Link } from 'react-router';


import Cards from './components/Blog/Cards.js';
import NavBar from './components/Header/NavBar.js'
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
class App extends React.Component {
  getChildContext() {
  return {muiTheme: getMuiTheme()};
  }
  handelOpen(){
    this.refs.navbar.handleToggle();
  }
  render(){
    let styles={
      color:{
        backgroundColor:'rgba(0,0,0,0)',
        boxShadow:'none'
      }
    }
    return(
      <div>
      <div style={{position:'absolute'}}>
      <AppBar title="首页"
              onLeftIconButtonTouchTap={this.handelOpen.bind(this)}
              style={styles.color}/>
     <NavBar ref='navbar'/>
    </div>
        {this.props.children}

    </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
