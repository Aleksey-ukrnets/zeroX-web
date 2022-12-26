import Grid from '@mui/material/Grid';
import { ContainerBox } from '../ContainerBox/ContainerBox';
import { Title } from '../../components/Title/Title';
import css from './token.module.scss';
import { CommonAvatar } from '../../components/CommonAvatar/CommonAvatar';
import { Box, Typography, Button } from '@mui/material';
import { IconsContainer } from '../../components/IconsContainer/IconsContainer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TwitterCard from '../TwitterCard/TwitterCard';

export const TokenInfo = () => {
  let [twits, setTwits] = useState([]);
  useEffect(() => {
    axios.get('https://zerox.pro/api/twitter').then((resp) => {
      console.log(resp, 'twitter');
      setTwits(resp.data.data);
    });
  }, []);
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
            <CommonAvatar />
            <Box sx={{ ml: { tablet: 4 } }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  textAlign: { mobile: 'center' },
                  my: { mobile: 2 },
                }}
              >
                Expo token
              </Typography>
              <IconsContainer />
            </Box>
          </Box>

          <Typography
            variant="p"
            component="p"
            my={{ mobile: 6.5, tablet: 3.75 }}
          >
            In pursuit of more income, most of the users are trying to find
            tokens in the initial phase. Scammers, knowing this, mask their
            projects with vulnerabilities. <br />
            <br />
            Our goal is to provide you with a simple tool with information about
            tokens that have passed a full audit and minimize your risks.
          </Typography>
        </Grid>
        <Grid item tablet={6} sx={{ width: '100%', height: '100%' }}>
          {/* <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
            spacing={1}
            columns={12}
            sx={{ height: '100%' }}
          >
            <Grid item mobile={3} sx={{ height: '100%' }}>
              <Box sx={{ backgroundColor: '#434652', height: '25%' }}>asd</Box>
            </Grid>
            <Grid item mobile={3}>
              <Box sx={{ backgroundColor: '#434652', height: '50%' }}>asd</Box>
            </Grid>
            <Grid item mobile={3}>
              <Box sx={{ backgroundColor: '#434652', height: '10%' }}>asd</Box>
            </Grid>
            <Grid item mobile={3}>
              <Box sx={{ backgroundColor: '#434652', height: '50%' }}>asd</Box>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item mobile={6}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              py: 1.25,
              fontWeight: '600',
              width: { mobile: '100%', tablet: '221px' },
            }}
          >
            Sell
          </Button>
        </Grid>
        <Grid item mobile={6}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              py: 1.25,
              fontWeight: '600',
              color: '#000',
              width: { mobile: '100%', tablet: '221px' },
            }}
          >
            Buy
          </Button>
        </Grid>
      </Grid>
      <div className={css.twitterPosts}>
        {twits.map((el, index) => {
          return <TwitterCard key={index} data={el} />;
        })}
      </div>
    </ContainerBox>
  );
};

//sx={{ display: 'flex', height: '100%' }}
