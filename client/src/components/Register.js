import React, { Component } from "react";
import { Icon, Input } from "semantic-ui-react";

class Register extends Component {
  state = { username: "", password: "", email: "" };
  onFormSubmit = event => {
    console.log("submitting");
    event.preventDefault();
    this.props.onSubmit(
      this.state.username,
      this.state.password,
      this.state.email
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <Input icon placeholder="email">
            <Icon name="mail" />
            <input
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </Input>
          <div>
            <Input
              icon
              onChange={e => this.setState({ username: e.target.value })}
              value={this.state.username}
              placeholder="Username"
            />
          </div>
          <div>
            <Input
              icon
              placeholder="Password"
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
            />

            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
