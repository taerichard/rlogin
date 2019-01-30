import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.email, this.state.password);
    console.log("loggin form clicked");
  };
  render() {
    return (
      <div className="loggin-container">
        <form onSubmit={this.handleOnSubmit}>
          <h3>Loggin To Your Account</h3>
          <input
            className="ui medium input"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleOnChange}
            name="email"
          />
          <div>
            <input
              className="ui medium input"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleOnChange}
              name="password"
            />
          </div>
          <button style={{ marginTop: "10px" }} className="mini ui button">
            Loggin
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
