import React, { Component } from "react";
import Header from "./Header";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import unsplash from "../api/unsplash";
import "./regLog.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }
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
        { auth: "fuck" }
      )
      .then(response => {
        localStorage.setItem("myToken", response.data[0].token);
        console.log(response.data[0].token);
        this.setState({ isAuthenticated: true });
      })
      .catch(err => console.log(err));
  };
  checkAuthentication = () => {
    if (this.state.isAuthenticated) {
      return <Home handleLogout={this.handleLogout} />;
    } else {
      return (
        <div>
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
  };
  handleLogout = () => {
    this.setState({ isAuthenticated: false });
  };
  render() {
    return (
      <div className="container">
        <div className="header">
          <Header />
        </div>
        {this.checkAuthentication()}
      </div>
    );
  }
}

export default App;
