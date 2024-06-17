import Number from "./Number";

export default function Numbers ({ time }) {
  const numbers = [];
  for (let number = 1; number <= 12; number++) {
    numbers.push(<Number number={number} time={time} key={number} />);
  }
  return (
    <>
      {numbers}
    </>
  );
}