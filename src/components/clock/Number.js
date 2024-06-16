const margins = [18, 18, 17, 20, 24, 26, 24, 17, 18, 35, 26, 18];

export default function Number ({ number, size, time }) {
  const degree = (number / 12 * 360) % 360;
  const ligthness = time.getHours() < 12 ? 75 : 50;
  const wrapperStyle = {
    fontSize: `${4 / 800 * size}em`,
    color: `hsl(${degree}, 100%, ${ligthness}%)`,
    height: `${size}px`,
    transform: `translateX(-50%) rotate(${degree}deg)`
  };
  const numberStyle = {
    transform: `rotate(-${degree}deg)`,
    margin: `${margins[number - 1] / 800 * size}px`
  };
  return (
    <div className="number" style={wrapperStyle}>
      <div style={numberStyle}>{number}</div>
    </div>
  );
}
