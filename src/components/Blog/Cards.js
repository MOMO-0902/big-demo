import React, { Component } from 'react';
import axios from 'axios';
import CardList from './CardList.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import map from 'lodash/fp/map';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import Icons from './Icon';




// let Cards = [
//   {index: '1', title:'这是第一天',date:'2016.7.19'},
//   {index: '2', title:'这是第二天',date:'2016.7.21'},
//   {index: '3', title:'这是第三天',date:'2016.7.22'}
// ]


class Card extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }

  constructor(){
    super();
    this.state={
      posts:'',
      wait:true,
    }
  }

  componentDidMount(){
    //use Math.random to avoid browser cache
    axios.get(`https://raw.githubusercontent.com/MOMO-0902/big-demo/master/posts/index.json?v=${Math.random()}`)
         .then((arr) => {
            // console.log(arr);
            this.setState({
              posts:arr.data,
              wait:false
            });
          });

      }

  render(){
    let styles={
     circle:{
         textAlign:'center',
         margin:'30px auto'
     }
}
    var AllCards = [];
    if(this.props.pipei == ""){
        // map((b) => {
        //   AllCards.push(
        //       <CardList title={b.title} date={b.created_at } index={b.id} url={b.name} key={Math.random()}/>)
        //     }
        for(let i = this.state.posts.length -1 ; i >=0 ; i--){
            AllCards.push(
              <CardList index={this.state.posts[i].id}
                        title={this.state.posts[i].title}
                        date={this.state.posts[i].date}
                        url={this.state.posts[i].name}
                        key={Math.random()}
                />)
          }
      }else{
        for (var i = 0; i < this.state.posts.length; i++) {
        let posts = this.state.posts[i];
        if (posts.title.indexOf(this.props.pipei)!= -1 || posts.id == this.props.pipei) {
           AllCards.push(<CardList title={this.state.posts[i].title} url={this.state.posts[i].name} date={this.state.posts[i].date} index={this.state.posts[i].id} key={Math.random()}/>)
        }
      }
    }


    return(
      <div>


        { this.state.wait ? <div style={styles.circle}><CircularProgress size={1.5} /></div> : ''}
        {AllCards}

      </div>
    )
  }
}

Card.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Card;
