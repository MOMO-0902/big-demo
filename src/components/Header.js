import React from 'react';
import Icons from './Icon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Hamburger from './Hamburger';

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
    


    }
    return(
      <div style={styles.root}>

        <Icons />
        <Hamburger />

      </div>
    )
  }
}
Header.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Header;
