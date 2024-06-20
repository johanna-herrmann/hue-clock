import Segment from './Segment';

// maps digit to active segments (segments ordering shown at the end of this file)
const digitSegmentMapping = [
  [0, 1, 2, 3, 4, 5],
  [1, 2],
  [0, 1, 3, 4, 6],
  [0, 1, 2, 3, 6],
  [1, 2, 5, 6],
  [0, 2, 3, 5, 6],
  [0, 2, 3, 4, 5, 6],
  [0, 1, 2],
  [0, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 5, 6]
];

// maps segment types (h=horizontal, v=vertical, segments ordering shown at the end of this file)
const segmentTypes = 'hvvhvvh';

// maps segments to their positional offset (segments ordering shown at the end of this file)
const segmentPositionOffsets = [
  [6, 5],
  [41, 6],
  [41, 43],
  [6, 78],
  [4.5, 43],
  [4.5, 6],
  [6, 41.5]
]

const positions = {
  hour: [0, 0],
  minute: [128, 0],
  second: [254, 0]
}

const secondDigitOffset = 50;

function calculateDegree (time, type) {
  switch (type) {
    case 'second': return time.getSeconds() / 60 * 360;
    case 'minute': return 6.0 * time.getMinutes();
    case 'hour':
    default:
      const hours = (time.getHours() % 12) || 12;
      return 30.0 * hours;
  }
}

function getValue (time, type) {
  switch (type) {
    case 'second': return time.getSeconds();
    case 'minute': return time.getMinutes();
    case 'hour':
    default: return time.getHours();
  }
}

function convertDigitToSegments (pos, color, digit) {
  const segments = [];
  for (let segment = 0; segment < 7; segment++) {
    const on = digit >= 0 && digitSegmentMapping[digit].includes(segment);
    const segmentPos = [...pos];
    segmentPos[0] += segmentPositionOffsets[segment][0];
    segmentPos[1] += segmentPositionOffsets[segment][1];
    segments.push(<Segment pos={segmentPos} on={on} type={segmentTypes.charAt(segment)} color={color} key={segmentPos} />);
  }
  return segments;
}

export default function Number ({time, type}) {
  const value = getValue(time, type);
  const degree = calculateDegree(time, type);
  const ligthness = time.getHours() < 12 ? 75 : 50;
  const color = `hsl(${degree}, 100%, ${ligthness}%)`;
  const pos1 = positions[type];
  const pos2 = [pos1[0] + secondDigitOffset, pos1[1]];
  const digit1 = Math.floor(value / 10);
  const digit1Segments = convertDigitToSegments(pos1, color, type !== 'hour' || digit1 > 0 ? digit1 : -1);
  const digit2Segments = convertDigitToSegments(pos2, color, value % 10);
  const segments = [...digit1Segments, digit2Segments];
  return (
    <>
      {segments}
    </>
  );
}

/* segment ordering

   0000000000000000
   0000000000000000
555                111
555                111
555                111
555                111
555                111
   6666666666666666
   6666666666666666
444                222
444                222
444                222
444                222
444                222
   3333333333333333
   3333333333333333

*/
