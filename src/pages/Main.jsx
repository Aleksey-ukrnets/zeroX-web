import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import css from '../styles/pages/main.module.scss';
import CardToken from '../ui/CardToken/CardToken';
// import MainLayout from '../ui/MainLayout/MainLayout';
import Tabs from '../ui/Tabs/Tabs';

import ProBtn from '../ui/Buttons/ProBtn';
import { useSelector } from 'react-redux';
import { tokenCardsSelector } from '../store/slices/tokenCards';

const tabs = [
  { id: 1, title: 'ANALYZED' },
  { id: 2, title: 'AFTER LAUNCHPAD' },
  { id: 3, title: 'ALGO TRADED' },
  { id: 4, title: 'MARKET INFO' },
];

export default function Main() {
  const [tab, setTab] = useState(0);
  const { tokenCards } = useSelector(tokenCardsSelector.getTokenCards);
  // const [cards, setCards] = useState([]);
  // useEffect(() => {
  //   axios.get('https://zerox.pro/api/token_list?limit=6')
  //   .then((resp) => {
  //      console.log(resp,'resp')
  //      setCards(resp.data.data)
  //   })
  //  }, [])
  return (
    <div className={css.main}>
      <h1 className={css.title}>{tabs[tab].title}</h1>

      <Tabs tabs={tabs} initialTab={tab} onTabChange={setTab} />
      {tab === 0 ? (
        <>
          <Box mx={15} px={2} className={css.cards}>
            <Grid container spacing={4.75}>
              {tokenCards.map((el, index) => {
                return (
                  <Grid item desktop={4}>
                    <CardToken key={index} data={el} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <ProBtn />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
