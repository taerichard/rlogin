import React, { Component } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      result: [...this.state]
    });
  }
  render() {
    return (
      <div>
        <Header />
        <LoginForm
          onSubmit={this.handleSubmit}
          onChange={this.handleOnchange}
        />
      </div>
    );
  }
}
