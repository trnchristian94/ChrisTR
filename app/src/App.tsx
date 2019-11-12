import * as React from 'react';
import 'styles/app.scss';
import 'styles/defaults.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "components/nvgtbar/NavigationBar";
import Home from "components/nvgtbar/options/Home";
import About from "components/nvgtbar/options/About";
import Contact from "components/nvgtbar/options/Contact";

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
          <div id="reactV">
          R-{React.version}
          </div>
          <p>
            Welcome to Chris TR
          </p>
        </header>
      </div>
    </Router>
  );
}

export default App;
