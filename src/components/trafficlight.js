import React, { Component } from "react";
import "./trafficlight.css";
import classNames from "classnames";

const COLOR_CODE = {
  RED: 0,
  ORANGE: 1,
  GREEN: 2,
};

const getNextColor = function (color) {
  switch (color) {
    case COLOR_CODE.RED:
      return COLOR_CODE.ORANGE;
      break;
    case COLOR_CODE.ORANGE:
      return COLOR_CODE.GREEN;
      break;
    case COLOR_CODE.GREEN:
      return COLOR_CODE.RED;
      break;

    default:
      break;
  }
};

class TrafficLight extends Component {
  constructor() {
    //set current color for a new instance
    super();
    // this.setState({ currentColor: COLOR_CODE.RED }); => false, currentColor is null => can't set
    this.state = { currentColor: COLOR_CODE.RED };

    //count down
    setInterval(() => {
      //   console.log(this.state.currentColor);
      this.setState({ currentColor: getNextColor(this.state.currentColor) });
    }, 1000);
  }

  render() {
    let color = this.state.currentColor;
    console.log("rerender...", color);
    return (
      <>
        <div className="TrafficLight">
          <div
            className={classNames("light", "red", {
              "active-light": color === COLOR_CODE.RED,
            })}
          />
          <div
            className={classNames("light", "orange", {
              "active-light": color === COLOR_CODE.ORANGE,
            })}
          />
          <div
            className={classNames("light", "green", {
              "active-light": color === COLOR_CODE.GREEN,
            })}
          />
        </div>

        <div className="TrafficStick" />
      </>
    );
  }
}

export default TrafficLight;
