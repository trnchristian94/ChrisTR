import * as React from 'react';
import './styles/App.scss';

import NavigationBar from "./components/nvgtbar/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
          <div>
          React {React.version}
          </div>
          <p>
            Welcome to React
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
