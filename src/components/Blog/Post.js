import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';

class Post extends Component {
  constructor(){
    super();
    this.state={
      rawContent: ''
    }
  }
  componentDidMount(){
    console.log(this.props.params.title)
    // use math random to avoid browser cache
    let mdname=this.props.params.title;
    let address = `https://raw.githubusercontent.com/MOMO-0902/big-demo/master/posts/${mdname}.md?v=${Math.random()}`
    axios.get(address).then((res) => {
      this.setState({
        rawContent: res.data
      });
    });
  }

  render(){
    let content = marked(this.state.rawContent!='' ? this.state.rawContent : '请稍等......' );
    return(
      <div>
        <div className="post-content">
          <span dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
    )
  }
}

export default Post;
