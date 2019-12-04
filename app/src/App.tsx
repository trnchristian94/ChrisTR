import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "components/nvgtbar/NavigationBar";
import Home from "components/nvgtbar/options/Home";
import About from "components/nvgtbar/options/About";
import Contact from "components/nvgtbar/options/Contact";
import Comments from "components/nvgtbar/options/Comments";

import { useTheme } from "components/theme/ThemeContext";

import "styles/app.scss";
import "styles/defaults.scss";
import "styles/defaultLightMode.scss";
import "styles/defaultNightMode.scss";
import "styles/defaultMobile.scss";

const App: React.FC = () => {
  const themeState = useTheme();

  return (
    <BrowserRouter>
      <div
        className={`App ${themeState.dark ? "nightMode" : "lightMode"}`}
        id="principalApp"
      >
        <NavigationBar />
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/comments" component={Comments} />
          </Switch>
          <div id="reactV">R-{React.version}</div>
        </header>
      </div>
    </BrowserRouter>
  );
};

export default App;
