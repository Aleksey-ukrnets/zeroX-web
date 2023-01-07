import React from 'react';

import css from './style.module.scss';
import 'swiper/css';
// import 'swiper/css/autoplay';

// import required modules
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { scores } from '../../tools/get-score';

export default function SwiperSlides({ slides = [] }) {
  
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      modules={[ Autoplay]}
      direction={'vertical'}
      className={css.mySwiper}
    >
      {slides.map((el, index) => {
        return (
          <SwiperSlide key={index} className={css.slide}>
            <span>{scores(el.score, el.hasOwnProperty('creator_nick') ? '🔥' : '🚀' )}</span>
            <a href={el?.url} rel='noreferrer' target='_blank'>{el?.creator_nick || el?.message}</a>
            <a href={el?.url} rel='noreferrer' target='_blank'>{el?.ticker}</a>
            <span>5 min ago</span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
