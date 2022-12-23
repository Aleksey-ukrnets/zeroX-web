import Paper from '@mui/material/Paper';
import css from '../../styles/ui/containerBox.module.scss';

export const ContainerBox = ({ children, mt, mb }) => {
  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 2.5,
        mt: mt,
        mb: mb,
        backgroundImage: 'none',
      }}
      className={css.containerBox}
    >
      {children}
    </Paper>
  );
};
