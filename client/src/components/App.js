import React, { Component } from "react";
import Header from "./Header";
import Register from "./Register";
import Login from "./Login";
import unsplash from "../api/unsplash";
import "./regLog.css";
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
      <div className="container">
        <div className="header">
          <Header />
        </div>

        <div className="register">
          <h4 className="register-message">Create Your Account</h4>
          <Register onSubmit={this.handleRegisterSubmit} />
        </div>
        <div className="loggin">
          <h4 className="loggin-message">Login With Your Account</h4>
          <Login onSubmit={this.handleLoginSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
