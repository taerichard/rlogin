import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" />
          <input type="password" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
