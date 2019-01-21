import React, { Component } from "react";
import Header from "./Header";
import Register from "./Register";
import axios from "axios";

class App extends Component {
  handleSubmit = (username, password, email) => {
    axios
      .post("/register", {
        name: username,
        password: password,
        email: email
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Header />
        <Register onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
