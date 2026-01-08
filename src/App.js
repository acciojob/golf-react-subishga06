import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGameStarted: false,
      position: 0
    };

    // BIND METHODS
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.keyCode === 39 && this.state.isGameStarted) {
      this.setState({
        position: this.state.position + 5
      });
    }
  }

  buttonClickHandler() {
    this.setState({ isGameStarted: true });
  }

  renderChoice() {
    if (!this.state.isGameStarted) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }

    return (
      <div
        className="ball"
        style={{ left: this.state.position + "px" }}
      ></div>
    );
  }

  render() {
    return <div className="container">{this.renderChoice()}</div>;
  }
}

export default App;
