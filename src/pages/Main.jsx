import React, { useState } from 'react';
import css from '../styles/pages/main.module.scss';
// import MainLayout from '../ui/MainLayout/MainLayout';
import Tabs from '../ui/Tabs/Tabs';

const tabs = [
  { id: 1, title: 'ANALYZED' },
  { id: 2, title: 'AFTER LAUNCHPAD' },
  { id: 3, title: 'ALGO TRADED' },
  { id: 4, title: 'MARKET INFO' },
];

export default function Main() {
  const [tab, setTab] = useState(0);
  return (
    <div className={css.main} >
      <h1 className={css.title}>{tabs[tab].title}</h1>
      <Tabs tabs={tabs} initialTab={tab} onTabChange={setTab} />
    </div>
  );
}
