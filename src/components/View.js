import Clock from './clock/Clock';
import Colors from './colors/Colors';
import { useState } from 'react';

let updateTimeInterval = undefined;

function handleTimeInterval (isClock, updateTime) {
  if (isClock && !updateTimeInterval) {
    updateTimeInterval = setInterval(updateTime, 100);
  } else if (!isClock) {
    updateTimeInterval = clearInterval(updateTimeInterval);
  }
}

export default function View ({ viewState }) {
  const isClock = viewState.current === 'clock';
  const [timeState, setTimeState] = useState({
    time: new Date()
  });
  function updateTime () {
    setTimeState({
      time: new Date()
    });
  }
  handleTimeInterval(isClock, updateTime);
  if (isClock) {
    return <Clock time={timeState.time} />
  }
  if (viewState.current === 'colors') {
    return <Colors />
  }
  return <div>no such view: {viewState.current}</div>
}
