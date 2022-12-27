import { createRef, forwardRef, useState } from 'react';
import css from '../styles/components/profile.module.scss';
import Modal from '@mui/material/Modal';
import Registration from '../ui/Modals/Registration';

export default function Profile() {
  const [open, setOpen] = useState(false);
  const ref = createRef();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const RegistrationComponent = forwardRef(({ handleClose }, ref) => {
    return <Registration innerRef={ref} handleClose={handleClose} />;
  });

  return (
    <>
      <div className={css.main} onClick={handleOpen}>
        profile
      </div>
      <Modal open={open} onClose={handleClose} keepMounted disableEnforceFocus>
        <RegistrationComponent handleClose={handleClose} ref={ref} />
      </Modal>
    </>
  );
}
