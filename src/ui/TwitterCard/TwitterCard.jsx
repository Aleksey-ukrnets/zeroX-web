import React from 'react';

import css from './style.module.scss';

import twitter from '../../assets/twitter.svg';
import userIcon from '../../assets/userIcon.svg';
import infoIcon from '../../assets/info.svg';
import moment from 'moment/moment';
import { useNavigate } from 'react-router';

export default function TwitterCard({ data }) {
  let navigate = useNavigate();
  const toLink = (link) => navigate(`${link}`);

  const net = new Date(data?.publish_timestamp);
  const postTime = moment(net).format('h:mm A - MMM D, YYYY');
  // let day = date.getTimezoneOffset()

  return (
    <div className={css.twitterCard}>
      <header>
        <div className={css.logo}>
          <img src={data.avatar} alt="icon" />
        </div>
        <div className={css.nicks}>
          <div className={css.name}>{data.name}</div>
          <div className={css.nick}>{data.nick}</div>
        </div>
        <div className={css.link}>
          <img
            src={twitter}
            onClick={() => toLink(data.twitter_link)}
            alt="icon"
          />
        </div>
      </header>
      <div className={css.content}>{data.twit}</div>
      <div className={css.date}>{postTime}</div>
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
