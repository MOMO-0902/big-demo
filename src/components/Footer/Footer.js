import React from 'react';

class Footer extends React.Component {
  render(){
  let styles={
    footer:{
      backgroundColor:'rgba(33,150,243,0.95)',
      height:'450px',
      position:'relative',

    },
    p:{
      fontSize:'25px',
      position:'absolute',
      left:'20%',
      color:'#fff',
      top:'10%',

    },
    img:{
      position:'absolute',
      top:'30%',
      left:'37%',
      width:'20vw',
      height:'20vw'

    }
  }
    return(
      <div style={styles.footer}>
        <p style={styles.p}>更多讨论和内容，请添加 MonMon 微信：329053928@qq.com</p>
        <img style={styles.img} src="https://github.com/MOMO-0902/big-demo/blob/master/src/source/weixin.jpg?raw=true" />
      </div>
    )
  }
}

export default Footer;
