import React, { useState } from 'react';
import css from '../styles/pages/main.module.scss';
import CardToken from '../ui/CardToken/CardToken';
// import MainLayout from '../ui/MainLayout/MainLayout';
import Tabs from '../ui/Tabs/Tabs';
import testLogo from '../assets/test_logo_token.svg'


const tabs = [
  { id: 1, title: 'ANALYZED' },
  { id: 2, title: 'AFTER LAUNCHPAD' },
  { id: 3, title: 'ALGO TRADED' },
  { id: 4, title: 'MARKET INFO' },
];

export default function Main() {
  const [tab, setTab] = useState(0);
  const [cards, setCards] = useState([
    {
      id: 1,
      type: 'pro',
      text: 'analyzed',
      rarity: 1,
      logo: testLogo,
      title: 'Trust Wallet',
      desc: 'Token with 500.000$ marketcap. and 200.000$ liquidity',
      rise: '45%',
      holders: '1500',
      age: '2d'
    },
    {
      id: 2,
      type: 'pro',
      text: 'analyzed',
      rarity: 1,
      logo: testLogo,
      title: 'Xavier token',
      desc: 'Founded token for new walletts and transactions. Analyzed for...',
      rise: '45%',
      holders: '1500',
      age: '2d'
    },
    {
      id: 3,
      type: 'pro',
      text: 'analyzed',
      rarity: 1,
      logo: testLogo,
      title: 'Car rent token',
      desc: 'Token with 500.000$ marketcap. and 200.000$ liquidity ',
      rise: '45%',
      holders: '1500',
      age: '2d'
    },
    {
      id: 4,
      type: 'pro',
      text: 'analyzed',
      rarity: 1,
      logo: testLogo,
      title: 'Omona coin',
      desc: 'Token with 500.000$ marketcap. and 200.000$ liquidity',
      rise: '45%',
      holders: '1500',
      age: '2d'
    },
    {
      id: 4,
      type: 'pro',
      text: 'analyzed',
      rarity: 1,
      logo: testLogo,
      title: 'Omona coin',
      desc: 'Token with 500.000$ marketcap. and 200.000$ liquidity',
      rise: '45%',
      holders: '1500',
      age: '2d'
    },
    {
      id: 4,
      type: 'pro',
      text: 'analyzed',
      rarity: 1,
      logo: testLogo,
      title: 'Omona coin',
      desc: 'Token with 500.000$ marketcap. and 200.000$ liquidity',
      rise: '45%',
      holders: '1500',
      age: '2d'
    },
    {
      id: 4,
      type: 'pro',
      text: 'analyzed',
      rarity: 1,
      logo: testLogo,
      title: 'Omona coin',
      desc: 'Token with 500.000$ marketcap. and 200.000$ liquidity',
      rise: '45%',
      holders: '1500',
      age: '2d'
    },
    {
      id: 4,
      type: 'pro',
      text: 'analyzed',
      rarity: 1,
      logo: testLogo,
      title: 'Omona coin',
      desc: 'Token with 500.000$ marketcap. and 200.000$ liquidity',
      rise: '45%',
      holders: '1500',
      age: '2d'
    },
    {
      id: 4,
      type: 'pro',
      text: 'analyzed',
      rarity: 1,
      logo: testLogo,
      title: 'Omona coin',
      desc: 'Token with 500.000$ marketcap. and 200.000$ liquidity',
      rise: '45%',
      holders: '1500',
      age: '2d'
    },
    {
      id: 4,
      type: 'pro',
      text: 'analyzed',
      rarity: 1,
      logo: testLogo,
      title: 'Omona coin',
      desc: 'Token with 500.000$ marketcap. and 200.000$ liquidity',
      rise: '45%',
      holders: '1500',
      age: '2d'
    },
   
  ]);
  return (
    <div className={css.main}>
      <h1 className={css.title}>{tabs[tab].title}</h1>
      <Tabs tabs={tabs} initialTab={tab} onTabChange={setTab} />
      {tab === 0 ? <div className={css.cards}>
        {cards.map((el, index) => {
          return <CardToken key={index} data={el} />;
        })}
      </div> : <></>}
    </div>
  );
}
