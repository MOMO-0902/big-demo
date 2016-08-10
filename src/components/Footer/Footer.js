import React from 'react';

class Footer extends React.Component {
  render(){
  let styles={
    root:{
      backgroundColor:'#2196F3',
      height:'300px'
    },
    p:{
      fontSize:'30px';
      position:"absolute",
      left:'20%',
      top:'5%',

    },
    img:{
      position:'absolute',
      top:'10%',
      left:'30%',
      width:'25vw',
      height:'25vw'

    }
  }
    return(
      <div style={styles.root}>
        <p style={styles.p}>更多讨论和内容，请添加 MonMon 微信：329053928@qq.com</p>
        <img style={styles.img} src="https://github.com/MOMO-0902/big-demo/blob/master/src/source/touxiang.jpg?raw=true" />
      </div>
    )
  }
}

export default Footer;
