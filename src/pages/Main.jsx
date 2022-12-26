import React, { useEffect, useState } from 'react';
import css from '../styles/pages/main.module.scss';
import CardToken from '../ui/CardToken/CardToken';
// import MainLayout from '../ui/MainLayout/MainLayout';
import Tabs from '../ui/Tabs/Tabs';

import ProBtn from '../ui/Buttons/ProBtn';
import axios from 'axios';

const tabs = [
  { id: 1, title: 'ANALYZED' },
  { id: 2, title: 'AFTER LAUNCHPAD' },
  { id: 3, title: 'ALGO TRADED' },
  { id: 4, title: 'MARKET INFO' },
];

export default function Main() {
  
  const [tab, setTab] = useState(0);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get('https://zerox.pro/api/token_list?limit=6')
    .then((resp) => {
       console.log(resp,'resp')
       setCards(resp.data.data)
    })
   }, [])
  return (
    <div className={css.main}>
      <h1 className={css.title}>{tabs[tab].title}</h1>
      <Tabs tabs={tabs} initialTab={tab} onTabChange={setTab} />
      {tab === 0 ? (
        <>
          <div className={css.cards}>
            {cards.map((el, index) => {
              return <CardToken key={index} data={el} />;
            })}
          </div>{' '}
          <ProBtn />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
