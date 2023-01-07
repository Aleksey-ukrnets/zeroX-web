import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import css from './commonAvatar.module.scss';

export const CommonAvatar = ({ src, widthProps, heightProps }) => {
  const DefaultAvatar = () => {
    return (
      <Box
        className={css.DefaultAvatar}
        sx={{
          width: {
            mobile: widthProps?.mobile || '109px',
            tablet: widthProps?.tablet || '129px',
          },
          height: {
            mobile: heightProps?.mobile || '109px',
            tablet: heightProps?.tablet || '129px',
          },
        }}
      >
        <svg
          className={css.DefaultAvatarIcon}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </Box>
    );
  };

  if (!src) {
    return <DefaultAvatar />;
  } else {
    return (
      <Avatar
        src={src}
        sx={{
          width: {
            mobile: widthProps?.mobile || '109px',
            tablet: widthProps?.tablet || '129px',
          },
          height: {
            mobile: heightProps?.mobile || '109px',
            tablet: heightProps?.tablet || '129px',
          },
          padding: '30px',
          backgroundColor: 'rgb(255 255 255 / 10%)',
        }}
      />
    );
  }
};
