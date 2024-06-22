import './component.tabbing.css';
import Tab from './Tab';

const TABBING = {
  Analog: 'analog',
  Digital: 'digital',
  Colors: 'colors'
};

export default function Tabbing ({ updateView, view }) {
  const tabs = [];
  for (const [title, slug] of Object.entries(TABBING)) {
    tabs.push(<Tab title={title} slug={slug} current={view.current} updateView={updateView} key={slug} />);
  }

  return (
    <header>
      {tabs}
    </header>
  );
}
