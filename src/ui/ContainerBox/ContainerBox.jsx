import Paper from '@mui/material/Paper';
import css from '../../styles/ui/containerBox.module.scss';

export const ContainerBox = ({ children, mt, mb }) => {
  return (
    <Paper
      sx={{
        boxShadow: 8,
        p: {
          tablet: '30px',
          mobile: '21px',
        },
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
