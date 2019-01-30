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
        <div>
          <form onSubmit={this.onFormSubmit}>
            <h3 style={{ textAlign: "center" }}>Create Your Account</h3>
            <input
              className="ui medium input"
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
              placeholder="Email"
            />
            <div>
              <input
                className="ui medium input"
                onChange={e => this.setState({ username: e.target.value })}
                value={this.state.username}
                placeholder="Username"
              />
            </div>
            <div>
              <input
                className="ui medium input"
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
            </div>
            <div>
              <button style={{ marginTop: "10px" }} className="mini ui button">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
