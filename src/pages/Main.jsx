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
  
  return (
    <div className={css.main}>
      <h1 className={css.title}>{tabs[tab].title}</h1>

      <Tabs tabs={tabs} initialTab={tab} onTabChange={setTab} />
      {tab === 0 ? (
        <>
          <Box
            mx={{ mobile: 0, tablet: 15 }}
            px={{ mobile: 0, tablet: 2 }}
            className={css.cards}
          >
            <Grid
              container
              spacing={4.75}
              columns={{ mobile: 6, tablet: 6, desktop: 12 }}
            >
              {tokenCards.map((el, index) => {
                return (
                  <Grid item mobile={6} tablet={3} desktop={4} key={index}>
                    <CardToken data={el} />
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
