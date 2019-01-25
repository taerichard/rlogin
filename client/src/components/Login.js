// when users are trying to loggin
import React, { Component } from "react";

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
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            placeholder="email"
            value={this.state.email}
            onChange={this.handleOnChange}
            name="email"
          />
          <input
            placeholder="password"
            value={this.state.password}
            onChange={this.handleOnChange}
            name="password"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Login;
