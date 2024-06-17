import { useState } from 'react';
import Tabbing from './components/navigation/Tabbing';
import View from './components/View';

export default function App () {
  const [viewState, setViewState] = useState({
    current: 'clock'
  });
  const updateView = function (current) {
    setViewState({ current });
    // TODO: change url, read initial view from url on page load
  };
  return (
    <main>
      <Tabbing updateView={updateView} view={viewState}></Tabbing>
      <View viewState={viewState} />
    </main>
  );
}