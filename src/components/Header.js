import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import css from '../styles/components/header.module.scss';
import Profile from './Profile';

const links = [
  { link: '', text: 'MAIN' },
  { link: 'market', text: 'MARKET INFO' },
  { link: 'pro', text: 'PRO' },
];

export default function Header() {
  const navigate = useNavigate();
  const navigateTo = () => navigate('/');
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <div className={css.logoText} onClick={navigateTo}>ZeroX</div>
        <div className={css.links}>
          {links.map((el) => (
            <NavLink className={css.link} key={el.link} to={el.link}>
              {el.text}
            </NavLink>
          ))}
        </div>
        <Profile />
      </div>
    </header>
  );
}
