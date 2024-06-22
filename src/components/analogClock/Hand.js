function calculateDegree (time, type) {
  switch (type) {
    case 'second': return time.getSeconds() / 60 * 360;
    case 'minute': return 6.0 * (time.getMinutes() + time.getSeconds() / 60.0);
    case 'hour':
    default:
      const hours = (time.getHours() % 12) || 12;
      return 30.0 * (hours + time.getMinutes() / 60.0);
  }
}

const paths = {
  second: 'M 456.5 487   l 2 0   l 2 -30   l 0 -14     l -2 -380   l -1   -25   l -2 0   l -1   25   l -2 380   l 0 14   l 2 30   l 2 0   z',
  minute: 'M 456.5 487   l 4 0   l 4 -30   l 0 -14     l -4 -380   l -2   -25   l -4 0   l -2   25   l -4 380   l 0 14   l 4 30   l 4 0   z',
  hour:   'M 456.5 487   l 4 0   l 4 -30   l 0 -14     l -4 -306   l -2   -25   l -4 0   l -2   25   l -4 306   l 0 14   l 4 30   l 4 0   z'
}

export default function Hand ({ time, type }) {
  const degree = calculateDegree(time, type);
  const ligthness = time.getHours() < 12 ? 75 : 50;
  const color = `hsl(${degree}, 100%, ${ligthness}%)`;
  const path = paths[type];
  const transform = `rotate(${degree} 456.1 456.1)`;
  return <path d={path} fill={color} transform={`${transform}`} stroke="black" />
}
