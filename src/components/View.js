import Clock from './clock/Clock';
import Colors from './colors/Colors';

export default function View ({ viewState }) {
  if (viewState.current === 'clock') {
    return <Clock />
  }
  if (viewState.current === 'colors') {
    return <Colors />
  }
  return <div>no such view: {viewState.current}</div>
}
