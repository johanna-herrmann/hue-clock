export default function Bar ({ number, time }) {
  const degree = (number / 60 * 360);
  const ligthness = time.getHours() < 12 ? 75 : 50;
  const color = `hsl(${degree}, 100%, ${ligthness}%)`;
  const barLength = (number % 5) === 0 ? 28.5 : 17.1;
  return <path d={`M 453.6 5  l 5.7 0  l 0 ${barLength}  l -5.7 0  l 0 -${barLength}  z`} fill={color} transform={`rotate(${degree} 456.1 456.1)`} />
}