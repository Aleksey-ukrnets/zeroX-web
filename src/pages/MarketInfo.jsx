import axios from 'axios';
import React, { useEffect, useState } from 'react';
import css from '../styles/pages/marketInfo.module.scss';
import cn from 'classnames';
import SwiperSlides from '../ui/SwiperSlide/SwiperSlides';

export default function MarketInfo() {
  const [twits, setTwits] = useState([]);
  const [trades, setTrades] = useState([]);
  const [topInfoTrades, setTopInfoTrades] = useState([]);

  useEffect(() => {
    axios
      .get('https://zerox.pro/api/market_info?network=1&part=hype_stat')
      .then((resp) => {
        console.log(resp, 'responsesssss');
        setTwits(resp.data.data.trending_tweets);
        setTrades(resp.data.data.trending_trades);

        setTopInfoTrades(resp.data.data.top_info);
      });
  }, []);

  console.log(topInfoTrades);
  return (
    <div className={css.market}>
      <div className={css.tradingBlock}>
        {topInfoTrades.map((el) => {
          let {change_type} = el
          return (
            <div className={css.tradeInfo}>
              <div className={css.title}>{el.title}</div>
              <div className={css.cost}>${el.volume}</div>
              <div style={{color: change_type === 'down' ? '#FF0000' : '#75FD53'}}  className={cn(css.persent, css.color)}>{el.change_percent}%</div>
            </div>
          );
        })}
      </div>
      <div className={css.infos}>
        <SwiperSlides slides={twits} />
        <SwiperSlides slides={trades} />
      </div>
      <div>text</div>
    </div>
  );
}
