import "./App.css";
import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage"
import NavBar from "./components/Navbar/Navbar.jsx";
import Form from "./components/Form/Form";
import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";
import GameDetail from "./containers/GameDetail/GameDetail";
import About from "./components/About/About.jsx"

function App() {

  return (
    <div className="App">
      <React.Fragment>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" component={NavBar} />
        <Route path="/about" exact component={About} />
        <Route path="/home" component={NavBar} />
        <Route path="/create" component={NavBar} />
        <Route path="/create" exact component={Form} />
        <Route path="/videogames" component={NavBar} />
        <Route path="/results" component={NavBar} />
        <Route path="/home" component={Home} />
        <Route
          exact path="/videogames/:id"
          render={({ match }) => < GameDetail id={match.params.id} />}
        />
        <Route
          exact path="/results/:name"
          render={({ match }) => <Search props={match.params} />}
        />
      </React.Fragment>
    </div>
  );
}

export default App;