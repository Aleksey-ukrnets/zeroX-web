import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.module.scss';

export default function CardToken({ data }) {
  return (
    <div className={css.card}>
      <div className={css.header}>
        <div className={css.type}>{data?.type}</div>
        <div className={css.text}>{data?.text}</div>
        <div className={css.rarity}></div>
      </div>
      <div className={css.logo}>
        <img src={data?.logo} alt="logo" />
      </div>
      <div className={css.title}>{data.title}</div>
      <div className={css.desc}>{data.desc}</div>
      <div className={css.tokenInfo}>
        <div className={css.rise}>
          <div>Rise</div>
          <div>{data?.rise}</div>
        </div>
        <div className={css.holders}>
          <div>Holders</div>
          <div> {data?.holders}</div>
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
