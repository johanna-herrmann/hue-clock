export default function Bar ({ number, size, time }) {
  const degree = (number / 60 * 360) % 360;
  const ligthness = time.getHours() < 12 ? 75 : 50;
  const barLength = (number % 5) === 0 ? 25 : 15;
  const wrapperStyle = {
    width: `${5 / 800 * size}px`,
    height: `${size}px`,
    color: `hsl(${degree}, 100%, ${ligthness}%)`,
    transform: `translateX(-50%) rotate(${degree}deg)`
  };
  const barStyle = {
    height: `${barLength / 800 * size}px`,
    backgroundColor: `hsl(${degree}, 100%, ${ligthness}%)`
  };
  return (
    <div className="bar-wrapper" style={wrapperStyle}>
      <div className="bar" style={barStyle}></div>
    </div>
  );
}