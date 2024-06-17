import Bar from "./Bar";

export default function Bars ({ time }) {
  const bars = [];
  for (let number = 0; number <= 59; number++) {
    bars.push(<Bar number={number} time={time} key={number} />);
  }
  return (
    <>
      {bars}
    </>
  );
};
