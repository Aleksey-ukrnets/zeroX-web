import React, { useEffect } from 'react';

import { statuses } from '../utils/accountStatuses';

import css from '../styles/pages/pro.module.scss';

import graphIcon from '../assets/graphik.png';
import balanceTokensIcon from '../assets/balanceTokens.png';
import tokensIcon from '../assets/tokens.png';



export default function Pro() {
  let blocks = [
    {
      title: 'Join our closed <span>pool</span>',
      text: 'Our algorithmic system allows you to buy the necessary tokens in a fully automatic mode, after passing a full audit. And the built-in money management system will allow you to comply with risk management for your portfolio',
      img: tokensIcon,
    },
    {
      title: 'How <span>ZeroX</span> token pool works',
      text: 'Look at the QATAR 2022 TOKEN example. Thanks to the correct formation of the pool, we managed to achieve a smooth growth, which provoked further growth on which we closed the position. All our subsequent and previous signals work according to this principle. Weeding out scam tokens and waiting for the right situation, together we can enter the token at the best price',
      img: graphIcon,
    },
    {
      title: 'Smart balance distribution',
      text: `Our system calculates the total amount of the pool, and calculates it in such a way that it does not affect the global economics of the project, so users within the pool do not affect each other's profitability in the event of a sale`,
      img: balanceTokensIcon,
    },
  ];
  
 

  return (
    <div className={css.pro}>
      <h1 className={css.titleBlock}>Zerox PRO</h1>
      <div className={css.postsCard}>
        {statuses.map((el, index) => {
          return (
            <div key={el.cost} className={css.container}>
              <div key={index} className={css.postCard}>
                <h1 className={css.title}>{el.title}</h1>
                {el.posts.map((el, index) => (
                  <ul key={index} className={css.posts}>
                    <li className={css.post}>{el}</li>
                  </ul>
                ))}
              </div>
              <button
                style={{ cursor: index > 1 ? 'default' : 'pointer' }}
                disabled={index > 1 ? true : false}
                className={css.btn}
              >
                {el.cost}$
              </button>
            </div>
          );
        })}
      </div>
      <h1 className={css.titleAbout}>What is PRO account?</h1>
      <div className={css.blocks}>
        {blocks.map((el, index) => (
          <div key={index} className={css.block}>
            <div className={css.textBlock}>
              <div
                dangerouslySetInnerHTML={{ __html: el.title }}
                className={css.title}
              />
              <p>{el.text}</p>
            </div>
            <div>
              <img src={el.img} alt="icons" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
