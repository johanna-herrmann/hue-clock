import AnalogClock from './analogClock/AnalogClock';
import DigitalClock from './digitalClock/DigitalClock';
import Colors from './colors/Colors';

export default function View ({ viewState }) {
  switch (viewState.current) {
    case 'analog': return <AnalogClock />
    case 'digital': return <DigitalClock />
    case 'colors': return <Colors />
    default: return <div>no such view: {viewState.current}</div>
  }
}
