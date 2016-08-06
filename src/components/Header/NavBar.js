import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

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

      },
      smallIcon:{
        width:'32px',
        height:'32px'
      },
      small:{
        position:'absolute',
        top:'10px',
        left:'10px',
        width:'52px',
        height:'52px',
        padding:'10px'
      },
      link:{
        textDecoration:'none',
        display:'block',
        color:'#333'
      },
      navTitle:{
        color:'#fff',
        lineHeight:'75px',
        fontSize:'20px',
        backgroundColor:'#00BCD4',
        marginBottom:'10px',
        marginTop: '0'
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
        <p style={styles.navTitle} onClick={this.handleClose.bind(this)}>MOMO-0902{this.state.title}</p>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>
            <Link to="/" style={styles.link} activeStyle={{color: '#E91E63'}} onlyActiveOnIndex={true}>首页</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>
            <Link to="blog" style={styles.link} activeStyle={{color: '#E91E63'}}>博客</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>
            <Link to="about" style={styles.link} activeStyle={{color: '#E91E63'}}>关于</Link>
          </MenuItem>
        </div>
        </Drawer>
      </div>
    );
  }
}
