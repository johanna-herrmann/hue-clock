import './component.clock.css';
import Face from './Face';
import Bars from './Bars';
import Numbers from './Numbers';
import Hand from './Hand';
import Axis from './Axis';

const HEADER = 30;
const PADDING = 20;

export default function Clock ({time}) {
  const size = Math.min(window.innerWidth - PADDING, window.innerHeight - PADDING - HEADER);
  return (
    <div id="clock-container">
      <svg id="clock" width={size} height={size} viewBox="0 0 913 913">
        <Face />
        <Bars time={time} />
        <Numbers time={time} />
        <Hand time={time} type="hour" />
        <Hand time={time} type="minute" />
        <Hand time={time} type="second" />
        <Axis />
      </svg>
    </div>
  );
}
