import React from 'react'
import css from './style.module.scss'


export default function MainLayout({children}) {
  return (
    <div className={css.MainLayout}>
        {children}
    </div>
  )
}
