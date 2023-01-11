import { Box, IconButton, Skeleton } from '@mui/material';
import variables from '../../styles/variables.scss';

export const MenuIcon = ({ handleDrawerToggle, mobileOpen }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { mobile: 'flex', tablet: 'none' },
        justifyContent: 'end',
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={handleDrawerToggle}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {mobileOpen ? (
            <>
              <Skeleton
                animation={false}
                width={25}
                height={5}
                sx={{
                  bgcolor: variables.colorLimeAccent,
                  transform: 'rotate(45deg)',
                }}
              />
              <Skeleton
                animation={false}
                width={25}
                height={5}
                sx={{
                  bgcolor: variables.colorLimeAccent,
                  transform: 'translateY(10px) rotate(319deg)',
                }}
              />
            </>
          ) : (
            <>
              <Skeleton
                animation={false}
                width={25}
                height={5}
                sx={{ bgcolor: variables.colorLimeAccent }}
              />
              <Skeleton
                animation={false}
                width={25}
                height={5}
                sx={{ bgcolor: variables.colorLimeAccent }}
              />
              <Skeleton
                animation={false}
                width={25}
                height={5}
                sx={{ bgcolor: variables.colorLimeAccent }}
              />
            </>
          )}
        </Box>
      </IconButton>
    </Box>
  );
};
