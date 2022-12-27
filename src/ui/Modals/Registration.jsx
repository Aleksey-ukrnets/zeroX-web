import React, { useEffect } from 'react';

import css from './style.module.scss';
import cn from 'classnames';

import metamaskIcon from '../../assets/metamask.svg';
import appStoreIcon from '../../assets/appstore.svg';
import googleStoreIcon from '../../assets/googleStore.svg';

export default function Registration({ props, handleClose }) {
  useEffect(() => {}, []);
  return (
    <div className={css.reg} onClick={handleClose}>
      <div className={css.content}>
        <div className={css.colLeft}>
          <h1 className={cn(css.text, css.big)}>Connect Wallet</h1>
          <p className={css.text}>
            Start by connecting with one of the wallets below. Be sure to store
            your private keys or seed phrase securely. Never share them with
            enyone
          </p>
          <img src={metamaskIcon} alt="iconMetamask" />
          <p className={cn(css.text)}>Metamask</p>
        </div>
        <div className={css.colRight}>
          <h1 className={cn(css.text)}>Haven't got wallet yet?</h1>
          <p className={cn(css.text)}>Download app</p>
          <div className={css.stores}>
            <div className={css.install}>
              <img src={appStoreIcon} alt="iconAppStore" />
              <div className={cn(css.white)}>Apple Store</div>
            </div>
            <div className={css.install}>
              <img src={googleStoreIcon} alt="IconGoogleStore" />
              <div className={cn(css.white)}>Google play</div>
            </div>
          </div>
          <p className={cn(css.text)}>Set up your wallet</p>
          <p className={cn(css.text)}>
            Connect wallet to <span>ZeroX</span>
          </p>
        </div>
      </div>
    </div>
  );
}
