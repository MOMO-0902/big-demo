import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};//页面点进来时nabar默认为关闭状态，如果为true,就是开启状态
  }

  handleToggle(){
    this.setState({open: !this.state.open});//navbar取反
  }

  handleClose() {
    this.setState({open: false});//navbar 关闭状态
  }

  render() {
    let styles={
      root:{
        marginTop:'0',
        width:'300px'
      },
      h1:{
        paddingTop:0,
        marginTop:0,
        color:"#fff",
        height:'60px',
        backgroundColor:'#2196F3',
        fontSize:'30px',
        margin:'0 atuo',
        lineHeight:'60px',
        textAlign:'center',
      },
      menu:{
        color:"#ooo",

        backgroundColor:'#E040',
        fontSize:'30px',
        textAlign:'center',
        lineHeight:'50px'

      }
    }
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <p style={styles.h1}>好多视频网</p>
        <div style={styles.menu}>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>视频列表</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>关于</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>注册</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>登录</MenuItem>
        </div>
        </Drawer>
      </div>
    );
  }
}
