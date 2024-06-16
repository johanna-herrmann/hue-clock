import Number from "./Number";

export default function Numbers ({ size, time }) {
  const numbers = [];
  for (let number = 1; number <= 12; number++) {
    numbers.push(<Number number={number} size={size} time={time} key={number} />);
  }
  return (
    <>
      {numbers}
    </>
  );
}