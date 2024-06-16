function calculateDegree (time, type) {
  switch (type) {
    case "second": return time.getSeconds() / 60 * 360;
    case "minute": return 6.0 * (time.getMinutes() + time.getSeconds() / 60.0);
    case "hour":
    default:
      const hours = (time.getHours() % 12) || 12;
      return 30.0 * (hours + time.getMinutes() / 60.0);
  }
}

const scales = {
  second: 1.0,
  minute: 0.9,
  hour: 0.8
}

export default function Hand ({ time, size, type }) {
  const degree = calculateDegree(time, type);
  const ligthness = time.getHours() < 12 ? 75 : 50;
  const width = 8 / 800 * size;
  const height = size / 2 - 100 / 800 * size;
  const offset = 20 / 800 * size;
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    background: `hsl(${degree}, 100%, ${ligthness}%)`,
    bottom: `calc(50% - ${offset}px)`,
    left: `calc(50% - ${width / 2}px)`,
    transform: `rotate(${degree}deg) scale(${scales[type]})`,
    transformOrigin: `${width / 2}px ${height - offset}px`
  }
  return (
    <div className={`hand ${type}`} style={style}></div>
  );
}