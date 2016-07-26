import React from 'react';

class Header extends React.Component {

  render(){
    let styles={
      root:{
        backgroundColor:'#2196F3',
        height:'300px',
      },
      h1:{
        paddingLeft:'45%',
        paddingTop:'100px',
        color:'#fff',
        fontSize:'40px'
      },
      icon:{
        paddingLeft:'50px'
      }
    }
    return(
      <div style={styles.root}>
        <h1 style={styles.h1}>ALL</h1>


      </div>
    )
  }
}

export default Header;
