import axios from 'axios';
import React, { useEffect } from 'react';
import css from '../styles/pages/marketInfo.module.scss';
import cn from 'classnames';
import SwiperSlides from '../ui/SwiperSlide/SwiperSlides';
import { Grid } from '@mui/material';
import { ChartGainers } from '../ui/ChartGainers/ChartGainers';
import {
  actions as actionTopMarketInfo,
  topMarketInfoSelector,
} from '../store/slices/topMarketInfo';
import { useDispatch, useSelector } from 'react-redux';
import { TableLosers } from '../ui/TableLosers/TableLosers';

export default function MarketInfo() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTopMarketInfo = async () => {
      try {
        const topMarketInfoData = await axios
          .get('https://zerox.pro/api/market_info?network=1&part=hype_stat')
          .then((info) => info?.data?.data);
        dispatch(actionTopMarketInfo.setTopMarketInfo(topMarketInfoData));
      } catch {
        console.error('fetchTopMarketInfo: getData error');
      }
    };

    fetchTopMarketInfo();
  }, [dispatch]);

  const { topMarketInfo } = useSelector(
    topMarketInfoSelector.getTopMarketInfoData
  );

  if (!topMarketInfo.top_info) {
    return null;
  }

  return (
    <div className={css.market}>
      <div className={css.tradingBlock}>
        {topMarketInfo.top_info.map((el, index) => {
          let { change_type } = el;
          return (
            <div className={css.tradeInfo} key={index}>
              <div className={css.title}>{el.title}</div>
              <div className={css.cost}>${el.volume}</div>
              <div
                style={{
                  color: change_type === 'down' ? '#FF0000' : '#75FD53',
                }}
                className={cn(css.persent, css.color)}
              >
                {el.change_percent}%
              </div>
            </div>
          );
        })}
      </div>
      <div className={css.infos}>
        <SwiperSlides slides={topMarketInfo.trending_tweets} />
        <SwiperSlides slides={topMarketInfo.trending_trades} />
      </div>
      <Grid container spacing={3.75} mt={0}>
        <Grid item mobile={12} tablet={6}>
          <ChartGainers />
        </Grid>
        <Grid item mobile={12} tablet={6}>
          <TableLosers />
        </Grid>
      </Grid>
    </div>
  );
}
