import React from 'react';
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import {white} from 'material-ui/styles/colors';
import Cards from'./Cards.js'
class Search extends React.Component {
  constructor(){
    super();
    this.state={
      search:""
    }
  }

  handleInput(e){
    let inputTxt = e.target.value;
    this.setState({search:inputTxt})
  }

render () {
    let styles={
      root:{
        backgroundColor:'rgba(33,150,243,0.9)',
        height:'300px',
        position:'relative',
      },
      h1:{
        position:'absolute',
        left:'40%',
        top:'60px',
        color:'#fff',
        fontSize:'50px'
      },
      iconStyles:{
        position:'absolute',
        marginRight: 24,
        left:'32%',
        top:'200px'
      },
      underlineStyle:{
        borderColor:'#fff'
      },
      hintStyle:{
        color:'#fff'
      },
      inputStyle:{
        color:'#fff'
      },
      text:{
        position:'absolute',
        left:'36%',
        top:'61%',
        width:'50%',
        maxWidth:'600px',
        fontSize:'20px'
      },
    }

return (
  <div>
      <div style={styles.root}>
        <h1 style={styles.h1}>ALL</h1>
        <ActionSearch style={styles.iconStyles} color={white}/>
        <TextField
                hintText="搜索"
                underlineFocusStyle={styles.underlineStyle}
                hintStyle={styles.hintStyle}
                inputStyle={styles.inputStyle}
                style={styles.text}
                onChange={this.handleInput.bind(this)}
              />
      </div>
      <Cards pipei={this.state.search}/>

      </div>
)};
}

export default Search;
