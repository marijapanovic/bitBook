import React, { Component } from 'react';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Main from './app/components/Main';
// import ProfilePage from './app/profile/ProfilePage';
// import PeoplePage from './app/people/PeoplePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        {/* <ProfilePage />
        <PeoplePage /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
