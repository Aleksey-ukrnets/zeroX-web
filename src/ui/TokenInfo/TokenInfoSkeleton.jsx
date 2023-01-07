import { Box, Typography, Button, Grid, Skeleton } from '@mui/material';
import { ContainerBox } from '../ContainerBox/ContainerBox';
import { Title } from '../../components/Title/Title';

import css from './token.module.scss';

export const TokenInfoSkeleton = () => {
  return (
    <ContainerBox mt={{ desktopLarge: 20 }}>
      <Title>Token Info</Title>
      <Grid container spacing={1} className={css.BorderBottom}>
        <Grid item tablet={6}>
          <Box
            className={css.BaseInfo}
            sx={{
              flexDirection: { mobile: 'column', tablet: 'row' },
              display: { tablet: 'flex' },
            }}
          >
            <Skeleton
              variant="circular"
              sx={{
                width: {
                  mobile: '109px',
                  tablet: '129px',
                },
                height: {
                  mobile: '109px',
                  tablet: '129px',
                },
              }}
            />
            <Box sx={{ ml: { tablet: 4 } }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  textAlign: { mobile: 'center' },
                  my: { mobile: 2 },
                }}
              >
                <Skeleton variant="text" width={210} height={50} />
              </Typography>
              <Skeleton variant="text" width={210} height={50} />
            </Box>
          </Box>

          <Typography
            variant="p"
            component="p"
            my={{ mobile: 6.5, tablet: 3.75 }}
          >
            <>
              <Skeleton variant="text" width={'100%'} height={20} />
              <Skeleton variant="text" width={'80%'} height={20} />
              <Skeleton variant="text" width={'90%'} height={20} />
            </>
          </Typography>
        </Grid>
        <Grid item tablet={6} sx={{ width: '100%', height: '100%' }}>
          {/*
       ---------- тут подумать - сделать обычными div'ми или графиками? --------- 
        */}
        </Grid>
      </Grid>
      <Box sx={{ display: 'inline-flex' }} mt={1}>
        <Box fontSize={{ mobile: 16, tablet: 20 }} mr={4}>
          <Typography variant="subtitle1" fontSize="inherit">
            <Skeleton variant="text" width={210} height={50} />
          </Typography>
          <Typography variant="caption" fontWeight="500" fontSize="inherit">
            <Skeleton variant="text" width={210} height={50} />
          </Typography>
        </Box>

        <Box fontSize={{ mobile: 16, tablet: 20 }}>
          <Typography variant="subtitle1" fontSize="inherit">
            <Skeleton variant="text" width={210} height={50} />
          </Typography>
          <Typography variant="caption" fontWeight="500" fontSize="inherit">
            <Skeleton variant="text" width={210} height={50} />
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            fontWeight: '500',
            width: { mobile: '100%', tablet: '221px' },
            marginRight: { mobile: 3, tablet: 4 },
          }}
        >
          Sell
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            fontWeight: '500',
            color: '#000',
            width: { mobile: '100%', tablet: '221px' },
          }}
        >
          Buy
        </Button>
      </Box>
    </ContainerBox>
  );
};
