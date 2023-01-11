import { Typography, Box, Drawer } from '@mui/material';

export const MenuMobile = ({ handleDrawerToggle, mobileOpen }) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        anchor={'top'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
