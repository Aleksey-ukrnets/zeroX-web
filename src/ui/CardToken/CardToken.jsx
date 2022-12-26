import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.module.scss';
import cn from 'classnames';
import { cardsConfig } from '../../config/cards';

const colors = {
  analyzed: { color: css.analyzed },
  algo: { color: css.algo },
  launchpad: { color: css.launchpad },
};

export default function CardToken({ data }) {
  function fires() {
    let finish = [];
    for (let i = 0; i < data.trend_score; i++) {
      finish.push('🔥');
    }
    return finish;
  }

  const { img } = cardsConfig[data?.status];
  // const age = new Date(1671805676).getFullYear()

  return (
    <div className={css.card}>
      <div className={css.header}>
        <div className={css.type}>
          {fires()?.map((el, index) => (
            <div key={index}>{el}</div>
          ))}
        </div>
        <div className={cn(css.text, colors[data?.status].color)}>
          {data?.status}
          {img && <img src={img} alt="img" />}
        </div>
        <div className={css.rarity}>
          <div className={colors[data?.status].color}></div>
        </div>
      </div>
      <div
        className={cn(
          css.logo,
          !data.token_logo && css.noLogo,
          colors[data?.status].color
        )}
      >
        {data.token_logo ? (
          <img src={data?.token_logo} alt="logo" />
        ) : (
          data.ticker
        )}
      </div>
      <div className={css.title}>{data.token_name}</div>
      <div className={css.desc}>{data.bio}</div>
      <div className={css.tokenInfo}>
        <div className={css.rise}>
          <div>Rise</div>
          <div>{data?.rise_score}</div>
        </div>
        <div className={css.holders}>
          <div>Holders</div>
          <div> {data?.holders_count}</div>
        </div>
        <div className={css.age}>
          <div>Age</div>
          <div>{data.age}</div>
        </div>
      </div>
      <Link to={`/${data.id}`} className={css.btn}>
        more info
      </Link>
    </div>
  );
}
