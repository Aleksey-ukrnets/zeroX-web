import React, { useState } from 'react';

import css from '../styles/pages/main.module.scss';

// import MainLayout from '../ui/MainLayout/MainLayout';
import Tabs from '../ui/Tabs/Tabs';

import ProBtn from '../ui/Buttons/ProBtn';
import { useSelector } from 'react-redux';
import { tokenCardsSelector } from '../store/slices/tokenCards';
import CardList from '../components/CardList/CardList';

const tabs = [
  { id: 1, title: 'All TOKENS' },
  { id: 2, title: 'AFTER LAUNCHPAD' },
  { id: 3, title: 'ALGO TRADED' },
  { id: 4, title: 'MARKET INFO' },
];

export default function Main() {
  const [tab, setTab] = useState(0);
  const {
    tokenCards,
    // tokenCardsAnalyzed,
    tokenCardsLaunchpad,
    tokenCardsAlgo,
  } = useSelector(tokenCardsSelector.getTokenCards);

  return (
    <div className={css.main}>
      <h1 className={css.title}>{tabs[tab].title}</h1>

      <Tabs tabs={tabs} initialTab={tab} onTabChange={setTab} />
      {tab === 0 ? (
        <CardList tokenCards={tokenCards} />
      ) : tab === 1 ? (
        <CardList tokenCards={tokenCardsLaunchpad} />
      ) : tab === 2 ? (
        <CardList tokenCards={tokenCardsAlgo} />
      ) : (
        <></>
      )}
    </div>
  );
}
