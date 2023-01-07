import React from 'react'
import { Box, Grid } from '@mui/material';
import css from '../../styles/pages/main.module.scss';
import ProBtn from '../../ui/Buttons/ProBtn';
import CardToken from '../../ui/CardToken/CardToken';
export default function CardList({ tokenCards}) {
  return (
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
  )
}
