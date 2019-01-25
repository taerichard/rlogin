import React, { Component } from "react";
import Header from "./Header";
import Register from "./Register";
import Login from "./Login";
import unsplash from "../api/unsplash";
class App extends Component {
  handleRegisterSubmit = (username, password, email) => {
    unsplash
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
  handleLoginSubmit = (email, password) => {
    unsplash
      .post("/loggin", {
        email,
        password
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Header />
        <Register onSubmit={this.handleRegisterSubmit} />
        <Login onSubmit={this.handleLoginSubmit} />
      </div>
    );
  }
}

export default App;
