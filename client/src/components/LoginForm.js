import React, { Component } from "react";

class LoginForm extends Component {
  state = { username: "", password: "" };
  onFormSubmit = event => {
    console.log("submitting");
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  };
  handleUsernameOnChange = event => {
    console.log("fdsa");
    this.setState({ username: event.target.value });
  };
  handlePasswordOnChange = event => {
    console.log("pw");
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            onChange={this.handleUsernameOnChange}
            value={this.state.username}
          />
          <input
            type="password"
            onChange={this.handlePasswordOnChange}
            value={this.state.password}
            name="password"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
