import React from 'react';
import Icons from './Icon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import {cyan500} from 'material-ui/styles/colors';
class Header extends React.Component {
   getChildContext() {
   return {muiTheme: getMuiTheme()};
   }

  render(){
    let styles={
      root:{
        backgroundColor:'#2196F3',
        height:'300px',
        position:'relative',
      },
      color:{
        backgroundColor:'#2196F3',
        boxShadow:'none'
      }



    }
    return(
      <div style={styles.root}>

        <Icons />

      {this.props.children}
      </div>
    )
  }
}
Header.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Header;
