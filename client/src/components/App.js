import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import Header from "./Header";
import unsplash from "../api/unsplash";
import { BrowserRouter } from "react-router-dom";
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
  handleHomeClick = event => {
    event.preventDefault();
    console.log("clicked");
  };
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header onClick={this.handleHomeClick} />
            <div>
              <div>
                <div>
                  <Register onSubmit={this.handleRegisterSubmit} />
                </div>
                <div>
                  <Login onSubmit={this.handleLoginSubmit} />
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
