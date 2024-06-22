import { useState, useEffect } from 'react';
import Face from './Face';
import Number from './Number';
import Colon from './Colon';
import './component.digitalClock.css'

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
      <svg id="clock" class="digital" viewBox="0 0 370 103">
        <Face />
        <Number time={currentTime} type="hour" />
        <Colon offset={116.5} />
        <Number time={currentTime} type="minute" />
        <Colon offset={243.5} />
        <Number time={currentTime} type="second" />
      </svg>
    </main>
  );
}
