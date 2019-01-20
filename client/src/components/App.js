import React, { Component } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
class App extends Component {
  handleSubmit = (username, password) => {
    console.log(username, password);
  };
  render() {
    return (
      <div>
        <Header />
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
