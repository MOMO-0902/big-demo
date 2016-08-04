import React from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Cards from './components/Cards.js';
import Home from './components/Home.js'

class App extends React.Component {
  render(){

    return(
      <div>
        <Header />

        <Home />
        <Cards />
        <Footer />
    </div>
    )
  }
}

export default App;
