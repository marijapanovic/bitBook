import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";

import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import Main from "./app/components/Main";

import RegisterAndLogin from './app/login/RegisterAndLogin';
import isUserLogged from './services/sessionService';

class App extends Component {
  // componentDidMount() {
  //   M.AutoInit();
  // }

  render() {
    return  (
      <div className="App">
        <Header />
        {/* <RegisterAndLogin /> */}
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;


// render() {
//   return isUserLogged() ? (
//     <div className="App">
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   ) : (
//     <Switch>
//       <Route exact path="/" component={RegisterAndLogin} />
//       <Redirect path="/" to="/" />
//     </Switch>
//   );
// }
// }
