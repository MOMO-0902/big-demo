import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Header extends React.Component {

   getChildContext() {
   return {muiTheme: getMuiTheme()};
   }

  render(){
    let styles={

      color:{
        backgroundColor:'#2196F3',
        boxShadow:'none'
      }



    }
    return(
      <div style={styles.root}>



      {this.props.children}
      </div>
    )
  }
}
Header.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Header;
