import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../styles/components/header.module.scss';
import Profile from './Profile';

const links = [
  { link: 'main', text: 'main' },
  { link: 'MARKET INFO', text: 'MARKET INFO' },
  { link: 'PRO', text: 'PRO' },
];

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.logoText}>ZeroX</div>
      <div className={css.links}>
        {links.map((el) => (
          <NavLink className={css.link} key={el.link} to={el.link}>
            {el.text}
          </NavLink>
        ))}
      </div>
      <Profile />
    </header>
  );
}
