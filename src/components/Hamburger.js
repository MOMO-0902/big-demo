import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import MenuButton from 'material-ui/svg-icons/navigation/menu';
import NavBar from './NavBar';


class Hamburger extends Component {
  handelOpen(){
    this.refs.navbar.handleToggle();
  }
  render() {
    let styles={
      icon:{
        marginTop:'10px',
        marginLeft:'10px',
        width: '52px',
        height: '52px',
      },
      svg: {
        width: '32px',
        height: '32px',
      }
    }
    return (
      <div>
        <IconButton style={styles.icon} iconStyle={styles.svg} onClick={this.handelOpen.bind(this)}>
          <MenuButton color='#fff' hoverColor='#004D40' />
        </IconButton>
        <NavBar ref='navbar'/>
      </div>
    );
  }
}



export default Hamburger;
