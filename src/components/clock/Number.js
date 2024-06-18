export default function Number ({ number, time }) {
  const degree = (number / 12 * 360) % 360;
  const ligthness = time.getHours() < 12 ? 75 : 50;
  const color = `hsl(${degree}, 100%, ${ligthness}%)`;
  const x = number > 9 ? 417 : 435;
  return (
    <g transform={`rotate(${degree} 456.1 456.1)`}>
      <text x={x} y="95.5" fill={color} fontFamily="sans-serif" fontSize="73px" transform={`rotate(-${degree} 456.1 67)`}>{number}</text>
    </g>
  );
}
