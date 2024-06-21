const COLOR = 'hsl(224, 76%, 37%)';
const DOT_SIZE = 10;
const Y_1_OFFSET = 15;
const Y_2_OFFSET = 55;

export default function Colon ({ offset }) {
  return (
    <>
      <rect x={offset} y={Y_1_OFFSET} width={DOT_SIZE} height={DOT_SIZE} rx="2" ry="2" fill={COLOR}  />
      <rect x={offset} y={Y_2_OFFSET} width={DOT_SIZE} height={DOT_SIZE} rx="2" ry="2" fill={COLOR}  />
    </>
  );
}
