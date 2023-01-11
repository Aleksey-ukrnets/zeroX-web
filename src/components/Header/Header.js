import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import variables from '../../styles/variables.scss';

import { LogoChains } from './LogoChains';
import { MenuIcon } from './MenuIcon';
import { MenuMobile } from './MenuMobile';

const links = [
  { link: '', text: 'MAIN' },
  { link: 'market', text: 'MARKET INFO' },
  { link: 'pro', text: 'PRO' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //   onClick={handleDrawerToggle}

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 10.08%, rgba(255, 255, 255, 0) 114.55%)',
          borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
          filter: 'drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.25));',
          backdropFilter: 'blur(5px)',
          borderRadius: '0px 0px 10px 10px',
          boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Container maxWidth="desktopLarge">
          <Toolbar variant="dense" disableGutters>
            <Link to={''}>
              <Typography
                color={variables.colorLimeAccent}
                component="div"
                fontWeight="500"
                sx={{
                  fontSize: { mobile: 24, tablet: 32 },
                }}
              >
                ZeroX
              </Typography>
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: { mobile: 'none', tablet: 'flex' },
                justifyContent: 'center',
                gap: '50px',
              }}
            >
              {links.map((page) => (
                <Link to={page.link} key={page.link}>
                  <Box
                    component="div"
                    key={page.link}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <Typography fontWeight="500">{page.text}</Typography>
                  </Box>
                </Link>
              ))}
            </Box>

            <LogoChains />

            <MenuIcon
              handleDrawerToggle={handleDrawerToggle}
              mobileOpen={mobileOpen}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <MenuMobile
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
    </>
  );
}
