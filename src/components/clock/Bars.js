import Bar from "./Bar";

export default function Bars ({ size, time }) {
  const bars = [];
  for (let number = 0; number <= 59; number++) {
    bars.push(<Bar number={number} size={size} time={time} key={number} />);
  }
  return (
    <>
      {bars}
    </>
  );
};
