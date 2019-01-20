import React, { Component } from "react";

class LoginForm extends Component {
  state = { username: "", password: "" };
  onFormSubmit = event => {
    console.log("submitting");
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            onChange={e => this.setState({ username: e.target.value })}
            value={this.state.username}
          />
          <input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
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
