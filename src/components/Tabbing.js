'use client';

import { usePathname } from "next/navigation";
import Tab from "./Tab";

const TABBING = {
  Clock: '/clock',
  Colors: '/colors'
};

export default function Tabbing () {
  const current = usePathname();
  const tabs = [];
  for (const [title, slug] of Object.entries(TABBING)) {
    tabs.push(<Tab title={title} slug={slug} current={current} key={slug} />);
  }

  return (
    <header>
      {tabs}
    </header>
  );
}
