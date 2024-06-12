import { Component } from "react";
import { ClassTrafficLightState } from "../types";

export class ClassTrafficLight extends Component {
  state: ClassTrafficLightState = {
    trafficLight: "red",
  };

  handleLight = () => {
    const { trafficLight } = this.state;
    if (trafficLight === "red") {
      this.setState({ trafficLight: "green" });
    } else if (trafficLight === "green") {
      this.setState({ trafficLight: "yellow" });
    } else if (trafficLight === "yellow") {
      this.setState({ trafficLight: "red" });
    }
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div
            className={`circle ${
              this.state.trafficLight === "red" ? "red" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.trafficLight === "yellow" ? "yellow" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.trafficLight === "green" ? "green" : "black"
            }`}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.handleLight}>
          Next State
        </button>
      </div>
    );
  }
}
