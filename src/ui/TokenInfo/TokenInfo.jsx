import Grid from '@mui/material/Grid';
import { ContainerBox } from '../ContainerBox/ContainerBox';
import { Title } from '../../components/Title/Title';
import css from './token.module.scss';
import { CommonAvatar } from '../../components/CommonAvatar/CommonAvatar';
import { Box, Typography, Button } from '@mui/material';
import { IconsContainer } from '../../components/IconsContainer/IconsContainer';

export const TokenInfo = () => {
  return (
    <>
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
              Our goal is to provide you with a simple tool with information
              about tokens that have passed a full audit and minimize your
              risks.
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
              Audit
            </Typography>
            <Typography variant="caption" fontWeight="600" fontSize="inherit">
              ZeroX
            </Typography>
          </Box>
          <Box fontSize={{ mobile: 16, tablet: 20 }}>
            <Typography variant="subtitle1" fontSize="inherit">
              Age
            </Typography>
            <Typography variant="caption" fontWeight="600" fontSize="inherit">
              2d
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
    </>
  );
};
