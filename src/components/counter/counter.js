import React, { Component } from "react";
import "../index.css";
import classnames from "classnames";

class Counter extends Component {
  constructor(props) {
    console.log("constructor...");
    super(props);

    this.state = {
      number: 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  decrease() {
    this.setState({ number: this.state.number - 1 });
  }

  increase() {
    this.setState({ number: this.state.number + 1 });
  }

  componentDidMount() {
    console.log("did mount");
    //api state
  }

  componentDidUpdate() {
    console.log("did update");
  }

  componentWillUnmount() {
    // debugger;
    console.log("will unmount");
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log("render");

    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.decrease}
        >
          -
        </button>
        <h2>{this.state.number}</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.increase}
        >
          +
        </button>
      </>
    );
  }
}

export default Counter;
