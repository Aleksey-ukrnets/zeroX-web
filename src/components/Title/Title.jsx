import Typography from '@mui/material/Typography';
import css from '../../styles/components/Title/title.module.scss';
export const Title = ({
  children,
  color = false,
  variant = 'h5',
  fontWeight = '500',
  fontSize,
}) => {
  return (
    <Typography
      variant={variant}
      component="h1"
      align="center"
      sx={{
        color: color,
        fontWeight,
        fontSize,
      }}
      className={css.Title}
    >
      {children}
    </Typography>
  );
};
