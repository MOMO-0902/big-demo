import React, { Component } from 'react';

import CardList from './CardList.js';

let Cards = [
  {title:'这是第一天',date:'2016.7.19'},
  {title:'这是第二天',date:'2016.7.21'},
  {title:'这是第三天',date:'2016.7.22'}
]

class Card extends Component {
  render(){

    var AllCards = [];
    for (var i = 0; i < Cards.length; i++) {
      let j=i+1;
      AllCards.push(
        <CardList title={Cards[i].title} date={Cards[i].date} index={j} key={i}/>
      )
    };

    return(
      <div>
        {AllCards}
      </div>
    )
  }
}

export default Card;
