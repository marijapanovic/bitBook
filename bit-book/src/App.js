import React, { Component } from 'react';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Main from './app/components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
