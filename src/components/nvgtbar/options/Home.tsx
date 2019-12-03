import * as React from "react";
import User from "src/Firebase/User";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        Welcome to the Home
        <User />
      </div>
    );
  }
}

export default Home;
