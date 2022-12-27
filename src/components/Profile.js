import { useState } from 'react';
import css from '../styles/components/profile.module.scss';
import Modal from '@mui/material/Modal';
import Registration from '../ui/Modals/Registration';

export default function Profile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className={css.main} onClick={handleOpen}>
        profile
      </div>
      <Modal open={open} onClose={handleClose}>
        <Registration handleClose={handleClose} />
      </Modal>
    </>
  );
}
