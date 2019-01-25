import React, { Component } from "react";

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
          <input
            onChange={e => this.setState({ email: e.target.value })}
            value={this.state.email}
            placeholder="Email"
          />
          <div>
            <input
              onChange={e => this.setState({ username: e.target.value })}
              value={this.state.username}
              placeholder="Username"
            />
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
            />
            <div>
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
