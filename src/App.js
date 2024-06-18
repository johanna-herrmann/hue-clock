import { useState } from 'react';
import Tabbing from './components/navigation/Tabbing';
import View from './components/View';
import SourceCoceLink from './components/SourceCodeLink';

function getCurrent () {
  const current = location.hash.substring(1);
  if (current === 'colors') {
    return 'colors';
  }
  return 'clock';
}

export default function App () {
  const current = getCurrent();
  const [viewState, setViewState] = useState({
    current
  });
  location.replace(`#${current}`);
  const updateView = function (current) {
    setViewState({ current });
    location.replace(`#${current}`);
  };
  return (
    <main>
      <Tabbing updateView={updateView} view={viewState}></Tabbing>
      <View viewState={viewState} />
      <SourceCoceLink />
    </main>
  );
}