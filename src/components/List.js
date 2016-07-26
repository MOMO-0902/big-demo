import React from 'react';

class List extends React.Component {
  render(){
     let styles={
       root:{
         width:'300px'
       },
       h1:{
         color:"#fff",
         backgroundColor:'#E040FB',
         fontSize:'30px',
         margin:'0 atuo',
         lineHeight:'30px'
       },
       ul:{
         color:"#ooo",
         backgroundColor:'#E040',
         fontSize:'20px',
         margin:'0 atuo',
         lineHeight:'50px'

       }
     }
    return(
      <div style={styles.root}>
        <h1 style={styles.h1}>好多视频网</h1>
        <ul style={styles.ul}>
          <li>视频列表</li>
          <li>关于</li>
          <li>注册</li>
          <li>登录</li>
        </ul>
      </div>
    )
  }
}

export default List;
