import React, { PropTypes } from 'react';
import MyWork from './MyWork.js';

class Home extends React.Component {
  render () {
    let styles={
      root:{
        width:'100%',
        height:'100vh',
        background: 'url("https://github.com/MOMO-0902/big-demo/blob/master/src/source/timg.jpg?raw=true") no-repeat fixed center center/cover'
      },
      title:{
        color:'#fff',
        textAlign:'center',
        paddingTop:'40vh',
        fontSize:'48px'
      },
      span:{
        color:'#00BCD4',
        fontSize:'36px'
      },
      cover:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.3)'
      }
    }
    return(
      <div>
       <div style={styles.root}>
         <div style={styles.cover}>
           <h1 style={styles.title}>欢迎光临<br/><span style={styles.span}>MOMO CORNER</span></h1>
         </div>
       </div>
       <h1 style={{color:'#777',textAlign:'center',lineHeight:'90px'}}>我的个人作品</h1>
       <MyWork />

     </div>
    )
  }
}

export default Home;
