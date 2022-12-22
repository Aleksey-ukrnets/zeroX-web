import Paper from '@mui/material/Paper';
import css from '../../styles/ui/containerBox.module.scss';

export const ContainerBox = ({ children }) => {
  return (
    <Paper sx={{ p: 2, borderRadius: 2.5 }} className={css.containerBox}>
      {children}
    </Paper>
  );
};
