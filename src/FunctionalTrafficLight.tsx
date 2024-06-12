import { useState } from "react";
import { TrafficLightState } from "../types";

export const FunctionalTrafficLight = () => {
  const [trafficLight, setTrafficLight] = useState<TrafficLightState>("red");

  const handleLight = () => {
    if (trafficLight === "red") {
      setTrafficLight("green");
    } else if (trafficLight === "green") {
      setTrafficLight("yellow");
    } else if (trafficLight === "yellow") {
      setTrafficLight("red");
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div
          className={`circle ${trafficLight === "red" ? "red" : "black"}`}
        ></div>
        <div
          className={`circle ${trafficLight === "yellow" ? "yellow" : "black"}`}
        ></div>
        <div
          className={`circle ${trafficLight === "green" ? "green" : "black"}`}
        ></div>
      </div>
      <button className="next-state-button" onClick={handleLight}>
        Next State
      </button>
    </div>
  );
};
