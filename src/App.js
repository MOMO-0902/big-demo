import React from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Cards from './components/Cards.js';


class App extends React.Component {
  render(){

    return(
      <div>
        <Header />


        <Cards />
        <Footer />
    </div>
    )
  }
}

export default App;
