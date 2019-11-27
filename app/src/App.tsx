import * as React from "react";
import "styles/app.scss";
import "styles/defaults.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "components/nvgtbar/NavigationBar";
import Home from "components/nvgtbar/options/Home";
import About from "components/nvgtbar/options/About";
import Contact from "components/nvgtbar/options/Contact";


import { useTranslation } from "react-i18next";


import styled from "@emotion/styled";

const Wrapper = styled("div")`
  .App-header {
    background-color: ${(props: any) => props.theme.background};
    color: ${(props: any) => props.theme.color};
  }
`;

const App: React.FC = () => {
  const { t } = useTranslation();
  

  return (
    <Router>
      <Wrapper>
        <div className="App">
          <NavigationBar />
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
            </Switch>
            <div id="reactV">R-{React.version}</div>
            <p>{t("welcome.title")}</p>
          </header>
        </div>
      </Wrapper>
    </Router>
  );
};

export default App;
