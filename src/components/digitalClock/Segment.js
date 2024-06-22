const HORIZONTAL_SEGMENT_MOVES = 'l 5 -5 l 24.7 0 l 5 5 l 0 0 l -5 5 l -24.7 0 l -5 -5';
const VERTICAL_SEGMENT_MOVES = 'l -5 5 l 0 24.7 l 5 5 l 5 -5 l 0 -24.7 l -5 -5';
const OFF_COLOR = 'black';

export default function Segment ({ pos, on, type, color }) {
  const actualColor = on ? color : OFF_COLOR;
  const moves = type === 'h' ? HORIZONTAL_SEGMENT_MOVES : VERTICAL_SEGMENT_MOVES;
  const startPos = `${pos[0]} ${pos[1]}`;
  const path = `M ${startPos} ${moves} z`;
  return <path d={path} fill={actualColor} />
}
