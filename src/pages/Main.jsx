import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import MainLayout from '../ui/MainLayout/MainLayout';
import Tabs from '../ui/Tabs/Tabs';

// import ProBtn from '../ui/Buttons/ProBtn';

import { tokenCardsSelector } from '../store/slices/tokenCards';
import CardList from '../components/CardList/CardList';
import { actions as tokenActions } from '../store/slices/tokenCards';
import axios from 'axios';
import css from '../styles/pages/main.module.scss';

const tabs = [
  { id: 1, title: 'All TOKENS' },
  { id: 2, title: 'AFTER LAUNCHPAD' },
  { id: 3, title: 'ALGO TRADED' },
  { id: 4, title: 'MARKET INFO' },
];

export default function Main() {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);

  const { tokenCards, tokenCardsLaunchpad, tokenCardsAlgo } = useSelector(
    tokenCardsSelector.getTokenCards
  );

  useEffect(() => {
    //tokenCards all
    axios.get('https://zerox.pro/api/token_list?limit=6').then((resp) => {
      dispatch(tokenActions.setTokenCards([...resp?.data?.data]));
    });
    //tokenCards launchpad
    axios
      .get('https://zerox.pro/api/token_list?limit=6&filter_type=launchpad')
      .then((resp) => {
        dispatch(tokenActions.setTokenCardsLaunchpad([...resp?.data?.data]));
      });
    //tokenCards algo
    axios
      .get('https://zerox.pro/api/token_list?limit=6&filter_type=algo')
      .then((resp) => {
        dispatch(tokenActions.setTokenCardsAlgo([...resp?.data?.data]));
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.main}>
      <h1 className={css.title}>{tabs[tab].title}</h1>

      <Tabs tabs={tabs} initialTab={tab} onTabChange={setTab} />
      {tab === 0 ? (
        <CardList tokenCards={tokenCards} tab={tab} />
      ) : tab === 1 ? (
        <CardList tokenCards={tokenCardsLaunchpad} tab={tab} />
      ) : tab === 2 ? (
        <CardList tokenCards={tokenCardsAlgo} tab={tab} />
      ) : (
        <></>
      )}
    </div>
  );
}
