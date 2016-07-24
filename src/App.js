import React from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import List from './components/List.js';

class App extends React.Component {
  render(){

    return(
      <div>
        <Header />
        <List />
        <Footer />

    </div>
    )
  }
}

export default App;
