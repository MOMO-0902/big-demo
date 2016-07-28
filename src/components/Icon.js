import React from 'react';
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import {white} from 'material-ui/styles/colors';

let styles={
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

const SvgIconExampleIcons = () => (
  <div>
  <h1 style={styles.h1}>ALL</h1>
    <ActionSearch style={styles.iconStyles} color={white}/>
    <TextField
            hintText="搜索"
            underlineFocusStyle={styles.underlineStyle}
            hintStyle={styles.hintStyle}
            inputStyle={styles.inputStyle}
            style={styles.text} />
  </div>
);

export default SvgIconExampleIcons;
