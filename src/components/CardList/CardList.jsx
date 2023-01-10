import React, { useEffect, useRef, useState } from 'react'
import { Box, Grid } from '@mui/material';
import css from '../../styles/pages/main.module.scss';
import ProBtn from '../../ui/Buttons/ProBtn';
import CardToken from '../../ui/CardToken/CardToken';
import axios from 'axios';
import useScroll from '../../hooks/useScroll';
import { useDispatch } from 'react-redux';
import { actions as tokenActions } from '../../store/slices/tokenCards';

export default function CardList({ tokenCards, tab,}) {

  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true)
  const [listType, setListType] = useState('token_list');
  const limit = 6;
  const parentRef = useRef();
  const childRef = useRef();
  const dispatch = useDispatch();
  useEffect(()=>{
    setLoading(true)
    setPage(1)
    if(tab === 0){
      setListType('token_list')
    } else if(tab === 1){
      setListType('launchpad')
    } else if(tab === 2){
      setListType('algo')
    }
  },[tab])

    const intersecting = useScroll(parentRef, childRef, ()=> fetchTokens(page, limit))

  function fetchTokens (page, limit) {
    axios
      .get(
        `https://zerox.pro/api/token_list?limit=${limit}&page=${page}${listType !== 'token_list' ? `&filter_type=${listType}` : ''}`
      )
      .then((resp) => {
        const datas = resp.data.length === 0
        console.log(datas)
        if(tab === 0){
          if(datas) setLoading(false)
          dispatch(tokenActions.setTokenCards([...tokenCards,...resp?.data?.data]));
        } else if(tab === 1){
          if(datas) setLoading(false)
          dispatch(tokenActions.setTokenCardsLaunchpad([...tokenCards,...resp?.data?.data]));
        } else if(tab === 2){
          if(datas) setLoading(false)
          dispatch(tokenActions.setTokenCardsAlgo([...tokenCards,...resp?.data?.data]));
        }
        setPage((prev) => prev + 1 )
        console.log(resp)
      });
  };
  return (
    <>
    <Box
      mx={{ mobile: 0, tablet: 15 }}
      px={{ mobile: 0, tablet: 2 }}
      className={css.cards}
      ref={parentRef}
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
      {isLoading && <div ref={childRef} style={{ width: '100%', color: 'red', textAlign: 'center'}}>isLoading</div>}
    </Box>
    <ProBtn />
  </>
  )
}
