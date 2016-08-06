import React, { Component } from 'react';
import axios from 'axios';
import CardList from './CardList.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import map from 'lodash/fp/map';
// let Cards = [
//   {index: '1', title:'这是第一天',date:'2016.7.19'},
//   {index: '2', title:'这是第二天',date:'2016.7.21'},
//   {index: '3', title:'这是第三天',date:'2016.7.22'}
// ]


class Card extends Component {
  constructor(){
    super();
    this.state={
      posts:''
    }
  }
  componentDidMount(){
    //use Math.random to avoid browser cache
    axios.get(`https://raw.githubusercontent.com/MOMO-0902/big-demo/master/posts/index.json?v=${Math.random()}`)
         .then((arr) => {
            console.log(arr);
            this.setState({
              posts:arr.data

            });
          });
      }

  render(){

    var AllCards = [];

    map((b) => {
      AllCards.push(
          <CardList title={b.title} date={b.created_at } index={b.id} key={Math.random()}/>
        );
    },
     this.state.posts
  );

    return(
      <div>
        <Header />
        {AllCards}
        <Footer />
      </div>
    )
  }
}

export default Card;
