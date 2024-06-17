import "./component.clock.css";
import Face from "./Face";
import Bars from "./Bars";
import Numbers from "./Numbers";
import Hand from "./Hand";
import Axis from "./Axis";
import { useState } from 'react';

const HEADER = 30;
const PADDING = 20;

export default function Clock () {
  const size = Math.min(window.innerWidth - PADDING, window.innerHeight - PADDING - HEADER);
  const [timeState, setTimeState] = useState({
    time: new Date()
  });
  function updateTime () {
    setTimeState({
      time: new Date()
    });
  }
  setInterval(updateTime, 100);
  return (
    <div id="clock-container">
      <svg id="clock" width={size} height={size} viewBox="0 0 913 913">
        <Face />
        <Bars time={timeState.time} />
        <Numbers time={timeState.time} />
        <Hand time={timeState.time} type="hour" />
        <Hand time={timeState.time} type="minute" />
        <Hand time={timeState.time} type="second" />
        <Axis />
      </svg>
    </div>
  );
}
