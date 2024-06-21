import { useState, useEffect } from 'react';
import Number from './Number';
import Colon from './Colon';
import './component.digitalClock.css'

const SVG_WIDTH_UNITS = 350;
const SVG_HEIGHT_UNITS = 83;

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

  return (
    <main className="clock">
      <svg id="clock" class="digital" viewBox="0 0 350 83">
        <Number time={currentTime} type="hour" />
        <Colon offset={106.5} />
        <Number time={currentTime} type="minute" />
        <Colon offset={233.5} />
        <Number time={currentTime} type="second" />
      </svg>
    </main>
  );
}
