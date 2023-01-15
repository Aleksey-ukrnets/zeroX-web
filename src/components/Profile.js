import { createRef, forwardRef, useEffect, useState } from 'react';
import css from '../styles/components/profile.module.scss';
import Modal from '@mui/material/Modal';
import Registration from '../ui/Modals/Registration';
import NoAvatar from '../assets/profile.svg';
import crossPurple from '../assets/crossPurple.svg';
import exit from '../assets/exit.svg';
import plus from '../assets/plus.svg';
import infoTable from '../assets/infotable.svg';
import axios from 'axios';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { actions as userActions, userSelector } from '../store/slices/user';
import { ArrowSVG } from '../assets/ArrowSVG';
import { IconButton, Typography } from '@mui/material';
import IconCopy from './Icons/IconCopy';
const btns = [
  { id: 1, img: infoTable, callback: '' },
  { id: 2, img: plus, callback: '' },
  { id: 3, img: exit, callback: '' },
];

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [tab, setTab] = useState(1);
  const [userInfoByTab, setUserInfoByTab] = useState([]);
  const { user, deposit } = useSelector(userSelector.getUser);
  const ref = createRef();

  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const RegistrationComponent = forwardRef(({ handleClose }, ref) => {
    return <Registration innerRef={ref} handleClose={handleClose} />;
  });
  useEffect(() => {
    axios.get('https://zerox.pro/api/portfolio?full_response=1').then((res) => {
      console.log(res.data, 'profile');
      dispatch(userActions.setUser(res.data));
    });
    axios.get('https://zerox.pro/api/deposit?network=1').then((res) => {
      console.log(res.data, 'datadopo');
      dispatch(userActions.setUserDeposit(res.data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isUp = user?.balance_change_type === 'up';

  useEffect(() => {
    if (tab === 3) setUserInfoByTab(user?.closed_postions);
    if (tab === 1) setUserInfoByTab(user?.positions);
  }, [tab, user]);
  console.log(deposit, 'deposit');
  return (
    <>
      <div className={css.profile} onClick={handleOpen}>
        <div
          className={css.avatar}
          onClick={(e) => {
            e.stopPropagation();
            setOpenProfile((prev) => !prev);
          }}
        >
          <img src={NoAvatar} alt="noAvatar" />
        </div>
        <div className={css.balance}>${user?.total_balance}</div>
      </div>
      {openProfile && (
        <div className={css.profileModal}>
          <div className={css.cross}>
            <img
              onClick={() => setOpenProfile(false)}
              src={crossPurple}
              alt="cross"
            />
          </div>
          <h1 className={css.title}>Portfolio</h1>
          <p className={css.text}>Total balance</p>
          <div className={css.balance}>${user?.total_balance}</div>
          <div className={cn(css.changes, !isUp && css.active)}>
            {ArrowSVG(isUp ? '#4CB904' : 'red')}
            <div className={cn(css.changeText, isUp && css.active)}>
              {`$${user?.balance_change} (${user?.balance_change_percent})`}
              <span>Total</span>
            </div>
          </div>
          <div className={cn(css.text, css.margin)}>Holded in Pool</div>
          <div className={css.balance}>${user?.in_pool}</div>
          <div className={css.btns}>
            {btns.map((el) => (
              <div
                key={el.id}
                className={cn(css.btn, el.id === tab && css.active)}
                onClick={() => setTab(el.id)}
              >
                <img src={el.img} alt="icons" />
              </div>
            ))}
          </div>
          {(tab === 1 || tab === 3) && (
            <>
              <div className={css.titleCol}>
                <div className={css.text}>Tokens</div>
                <div className={css.text}>Close position</div>
              </div>
              <div className={css.columns}>
                {userInfoByTab?.map((el, index) => {
                  let isType = el?.value_type === 'up';
                  let isThirdTab = tab === 3;
                  return (
                    <div className={css.main} key={index}>
                      <div className={css.firstCol}>
                        {isThirdTab && (
                          <div className={css.valuePercent}>
                            {Math.floor(el.value_percent)}%
                          </div>
                        )}
                        <div className={css.logo}>
                          <img src={el?.token_logo} alt="logo" />
                        </div>
                        <div className={css.text}>
                          {el?.token_name}
                          {`(${el?.ticker})`}
                        </div>
                      </div>

                      <div className={cn(css.secondCol, !isType && css.active)}>
                        {isThirdTab ? (
                          <div className={css.btnToken}>sell</div>
                        ) : (
                          <>
                            {ArrowSVG(isType ? '#4CB904' : 'red')}
                            <div
                              className={cn(
                                css.changeText,
                                isType && css.active
                              )}
                            >
                              {`$${el?.value} (${el.value_percent}%)`}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {tab === 2 && (
            <div className={css.secondTab}>
              <div className={css.title}>
                Your deposit address (BSC Mainnet)
              </div>
              <Typography
                noWrap
                sx={{ maxWidth: '287px' }}
                className={css.address}
              >
                {deposit?.data?.address_for_deposit}
              </Typography>
              <IconButton
                sx={{
                  background:
                    ' linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #9353FF',
                  borderRadius: '10px',
                  padding: '8px 23px',
                  margin: '8px 0 0 0'
                }}
                className={css.clipText}
              >
                <IconCopy textClipBoard={deposit?.data?.address_for_deposit} />
              </IconButton>
            </div>
          )}
        </div>
      )}
      <Modal open={open} onClose={handleClose} keepMounted disableEnforceFocus>
        <RegistrationComponent handleClose={handleClose} ref={ref} />
      </Modal>
    </>
  );
}
