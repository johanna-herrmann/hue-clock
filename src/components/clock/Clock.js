import './component.clock.css';
import Face from './Face';
import Bars from './Bars';
import Numbers from './Numbers';
import Hand from './Hand';
import Axis from './Axis';
import { useState, useEffect } from 'react';

const HEADER = 30;
const PADDING = 20;

export default function Clock () {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const size = Math.min(window.innerWidth - PADDING, window.innerHeight - PADDING - HEADER);
  return (
    <div id="clock-container">
      <svg id="clock" width={size} height={size} viewBox="0 0 913 913">
        <Face />
        <Bars time={currentTime} />
        <Numbers time={currentTime} />
        <Hand time={currentTime} type="hour" />
        <Hand time={currentTime} type="minute" />
        <Hand time={currentTime} type="second" />
        <Axis />
      </svg>
    </div>
  );
}
