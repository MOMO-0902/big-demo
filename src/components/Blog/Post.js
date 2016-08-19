import React, { Component } from 'react';
import axios from 'axios';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import marked from 'marked';
import hljs from 'highlight.js';
import {browserHistory} from 'react-router';
class Post extends Component {
  constructor(){
    super();
    this.state={
      rawContent: ''
    }
  }
  componentDidMount(){

    // use math random to avoid browser cache
    let mdname=this.props.params.title;
    console.log(mdname);
    let address = `https://raw.githubusercontent.com/MOMO-0902/big-demo/master/posts/${mdname}.md?v=${Math.random()}`
    axios.get(address).then((res) => {
      this.setState({
        rawContent: res.data
      });

    });
  }

  handleBack(){
    // console.log(hashHistory);
    browserHistory.goBack();
  }

  render(){
    console.log(this.props.params.title);
    marked.setOptions({
       highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    let content = marked(this.state.rawContent!='' ? this.state.rawContent : '请稍等......' );
    let styles={
      h1:{

        lineHeight:'75px',
        textAlign:'center',
        color:'#000',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 6px, rgba(0, 0, 0, 0.15) 0px 1px 4px'
      },
      cir:{
        textAlign:'center'
      },
      smallIcon: {
        width: 32,
        height: 32,
      },
      small: {
        width: 52,
        height: 52,
        padding: 10,
        position:'absolute',
        top:'10px',
        right:'10px',
      },
    }
    return(
      <div style={{backgroundColor:'rgba(30,144,255,0.3)'}}>
      <h1 style={styles.h1}>欢迎阅读</h1>
        <IconButton iconStyle={styles.smallIcon} style={styles.small} onClick={this.handleBack.bind(this)}>
          <ArrowBack color='#fff' />
        </IconButton>
        <div className="post-content">
          <span dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
    )
  }
}

export default Post;
