import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class CardList extends Component{
  handleClick(){
    this.context.router.push(`blog/${this.props.url}`);
  }

   render(){
     let styles={
       root:{
         width:'80%',
         height:'100px',
         margin:'10px auto',
         cursor:'pointer',
         position:'relative',
         boxShadow:'1px 3px 5px rgba(0, 0, 0, 0.16),2px 5px 10px rgba(0,0,0,0.12)'
       },
       index:{
         backgroundColor:'rgba(33,150,243,0.95)',
         color:'#fff',
         width:'11%',
         textAlign:'center',
         height:'100px',
         float:'left',

       },
       h2:{
         position:'absolute',
         top:'18px',
         left:'40px'
       },
       content:{
         paddingLeft:'20px',
         paddingTop:'10px',
         color:'#777',
         float:'left',
       }

     }

     return(
       <div style={styles.root} onClick={this.handleClick.bind(this)}>
        <div style={styles.index}>
          <h2 style={styles.h2}>{this.props.index}</h2>
        </div>
        <div style={styles.content}>
          <h3>{this.props.title}</h3><br/>
          <p>{this.props.date}</p>
        </div>
       </div>
     )
   }
}
CardList.propTypes = {
  title: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  date: React.PropTypes.string.isRequired,
};
CardList.defaultProps = {
  title: "请输入标题",
  index: 1,
  date: '2016.7.19',
};
CardList.contextTypes ={
  router:React.PropTypes.object
}
export default CardList;
