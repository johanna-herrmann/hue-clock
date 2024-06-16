"use client";

import { useState } from 'react';
import Clock from "@/components/clock/Clock";
import "./module.clock.css";

const PADDING = 20;
const HEADER = 30;

export default function ClockPage () {
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
    <main>
      <Clock size={size} time={timeState.time} />
    </main>
  );
}
