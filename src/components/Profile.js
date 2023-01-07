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

const btns = [
  { id: 1, img: infoTable, callback: '' },
  { id: 2, img: plus, callback: '' },
  { id: 3, img: exit, callback: '' },
];

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { user } = useSelector(userSelector.getUser);
  const ref = createRef();

  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const RegistrationComponent = forwardRef(({ handleClose }, ref) => {
    return <Registration innerRef={ref} handleClose={handleClose} />;
  });
  useEffect(() => {
    axios.get('https://zerox.pro/api/portfolio?full_response=1').then((res) => {
      console.log(res.data);
      dispatch(userActions.setUser(res.data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isUp = user?.balance_change_type === 'up';

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
              <div key={el.id} className={css.btn}>
                <img src={el.img} alt="icons" />
              </div>
            ))}
          </div>
          <div className={css.titleCol}>
            <div className={css.text}>Tokens</div>
            <div className={css.text}>Close position</div>
          </div>
          <div className={css.columns}>
            {user.closed_postions.map((el, index) => {
              let isType = el.value_type === 'up';
              return (
                <div className={css.main} key={index}>
                  <div className={css.firstCol}>
                    <div className={css.logo}>
                      <img src={el?.token_logo} alt="logo" />
                    </div>
                    <div className={css.text}>
                      {el.token_name}
                      {`(${el.ticker})`}
                    </div>
                  </div>

                  <div className={cn(css.secondCol, !isType && css.active)}>
                    {ArrowSVG(isType ? '#4CB904' : 'red')}
                    <div className={cn(css.changeText, isType && css.active)}>
                      {`$${user?.balance_change} (${user?.balance_change_percent})`}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Modal open={open} onClose={handleClose} keepMounted disableEnforceFocus>
        <RegistrationComponent handleClose={handleClose} ref={ref} />
      </Modal>
    </>
  );
}
