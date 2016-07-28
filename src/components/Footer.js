import React from 'react';

class Footer extends React.Component {
  render(){
  let styles={
    root:{
      backgroundColor:'#2196F3',
      height:'300px'
    }
  }
    return(
      <div style={styles.root}>
        <p>更多讨论和内容，请添加 MonMon 微信：329053928@qq.com</p>
      </div>
    )
  }
}

export default Footer;
