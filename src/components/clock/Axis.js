export default function Axis ({ size }) {
  const axisSize = 30 / 800 * size;
  const style = {
    width: `${axisSize}px`,
    height: `${axisSize}px`
  };
  return (
    <div className="axis" style={style}></div>
  );
}