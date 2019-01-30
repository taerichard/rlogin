import React, { Component } from "react";
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
      .post(
        "/loggin",
        {
          email,
          password
        },
        { auth: "chicken" }
      )
      .then(response => {
        localStorage.setItem("myToken", response.data[0].token);
        console.log(response.data[0].token);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div style={{ marginTop: "100px" }} className="ui centered grid">
        <div>
          <div className="six wide tablet eight wide computer column">
            <Register onSubmit={this.handleRegisterSubmit} />
          </div>
          <div
            style={{ marginTop: "40px" }}
            className="six wide tablet eight wide computer column"
          >
            <Login onSubmit={this.handleLoginSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
