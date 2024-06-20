import { useState, useEffect } from 'react';
import Number from './Number';

const PADDING = 20;
const SVG_WIDTH_UNITS = 350;
const SVG_HEIGHT_UNITS = 83;
const DOT_SIZE = 5;

export default function DigitalClock () {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const width = window.innerWidth - PADDING;
  const height = SVG_HEIGHT_UNITS / SVG_WIDTH_UNITS * width;
  return (
    <main className="clock">
      <svg id="clock" width={width} height={height} viewBox={`0 0 ${SVG_WIDTH_UNITS} ${SVG_HEIGHT_UNITS}`}>
        <Number time={currentTime} type="hour" />
        <Number time={currentTime} type="minute" />
        <Number time={currentTime} type="second" />
      </svg>
    </main>
  );
}
