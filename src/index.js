import React from 'react';
import { render } from 'react-dom';


import App from './App.js'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
class MyApp extends React.Component {
  render(){

    return(
      <div>
         <App />

      </div>
    )
  }
}



render(

  <MyApp />,document.getElementById('root'));
