import React, { Component } from 'react';

import CardList from './CardList.js';
import map from 'lodash/fp/map';
let Cards = [
  {index: '1', title:'这是第一天',date:'2016.7.19'},
  {index: '2', title:'这是第二天',date:'2016.7.21'},
  {index: '3', title:'这是第三天',date:'2016.7.22'}
]

class Card extends Component {
  render(){

    var AllCards = [];

    map((b) => {
      AllCards.push(
          <CardList title={b.title} date={b.date} index={b.index} key={Math.random()}/>
        );
    },
     Cards
  );

    return(
      <div>
        {AllCards}
      </div>
    )
  }
}

export default Card;
