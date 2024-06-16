import "./component.clock.css";
import Bars from "./Bars";
import Numbers from "./Numbers";
import Hand from "./Hand";
import Axis from "./Axis";

export default function Clock ({ size, time }) {
  const style = {
    width: `${size}px`,
    height: `${size}px`
  };
  return (
    <div id="clock" style={style}>
      <Bars size={size} time={time} />
      <Numbers size={size} time={time} />
      <Hand size={size} time={time} type="hour" />
      <Hand size={size} time={time} type="minute" />
      <Hand size={size} time={time} type="second" />
      <Axis size={size} />
    </div>
  );
}