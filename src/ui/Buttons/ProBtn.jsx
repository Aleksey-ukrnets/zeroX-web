import React from 'react'
import css from './style.module.scss'
export default function ProBtn({onClick}) {
  return (
    <button className={css.btn} onClick={onClick}>Get more with PRO</button>
  )
}
