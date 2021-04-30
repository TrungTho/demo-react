import React, { Component } from "react";
import "./index.css";
import classnames from "classnames";

class Demo extends Component {
  // constructor(props) {
  //   super(props);

  //   //innit state for data
  //   this.state = {
  //     item: { title: this.props.item.title, isDone: this.props.item.isDone },
  //   };

  //   //binding this (context) to new context to know what is "this"???
  //   this.doSomeThing = this.doSomeThing.bind(this);
  // }

  // //func to call when something is clicked
  // doSomeThing() {
  //   console.log(this.state.item);
  //   this.setState({
  //     item: { title: this.props.item.title, isDone: !this.state.item.isDone },
  //   });
  // }

  render() {
    // //check state of isDone to render data
    // let className = "rowData";
    // const itemToShow = this.props.item;

    // if (itemToShow.isDone) {
    //   className = "rowDataDone";
    // }

    console.log("rerender...");

    return (
      // when this.doSomeThing is called, new context will not know what is "this" mean
      <div className="Demo" onClick={this.props.onClick}>
        <div
          className={classnames("rowData", "", {
            rowDataDone: this.props.item.isDone === true,
          })}
        >
          <h5>{this.props.item.title} </h5>
        </div>
      </div>
    );
  }
}

export default Demo;
