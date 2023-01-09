import React from 'react';

import css from './style.module.scss';

import twitter from '../../assets/twitter.svg';
import userIcon from '../../assets/userIcon.svg';
import infoIcon from '../../assets/info.svg';
import { DateTime } from 'luxon';

export default function TwitterCard({ data }) {
  const net = DateTime.fromSeconds(data?.publish_timestamp).toFormat(
    'hh:mm a - LLL dd, yyyy'
  );

  return (
    <div className={css.twitterCard}>
      <header>
        <div className={css.logo}>
          <img src={data.avatar} alt="icon" />
        </div>
        <div className={css.nicks}>
          <div className={css.name}>{data?.name}</div>
          <div className={css.nick}>{data?.nick}</div>
        </div>
        <a
          rel="noreferrer"
          target="_blank"
          href={`${data?.twitter_link}`}
          className={css.link}
        >
          <img src={twitter} alt="icon" />
        </a>
      </header>
      <div className={css.content}>{data.twit}</div>
      <div className={css.date}>{net}</div>
      <footer>
        <img src={userIcon} alt="iconUser" />
        <div className={css.text}>See directoapp`s other Tweets </div>
        <div className={css.infoIcon}>
          <img src={infoIcon} alt="infoIcon" />
        </div>
      </footer>
    </div>
  );
}
