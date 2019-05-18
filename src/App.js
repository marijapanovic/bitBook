import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";


import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import Main from "./app/components/Main";

// import RegisterAndLogin from "./app/login/RegisterAndLogin";
// import isUserLogged from "./services/sessionService";

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

  // render() {
  //   return isUserLogged() ? (
  //     <Switch>
  //       <div className="App">
  //         <Header />
  //         <Main />
  //         <Footer />
  //       </div>
  //     </Switch>
  //   ) : (
  //       <Switch>
  //         <div className="App">
  //           <Route exact path="/" component={RegisterAndLogin} />
  //         </div>
  //       </Switch>
  //     );
  // }

}

export default App;

