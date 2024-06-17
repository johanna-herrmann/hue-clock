import "./component.clock.css";
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
  const style = {
    width: `${size}px`,
    height: `${size}px`
  };
  return (
    <div id="clock-container">
      <div id="clock" style={style}>
        <Bars size={size} time={timeState.time} />
        <Numbers size={size} time={timeState.time} />
        <Hand size={size} time={timeState.time} type="hour" />
        <Hand size={size} time={timeState.time} type="minute" />
        <Hand size={size} time={timeState.time} type="second" />
        <Axis size={size} />
      </div>
    </div>
  );
}