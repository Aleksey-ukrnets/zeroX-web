import { useSelector } from 'react-redux';
import { Box, Typography, Button, Grid } from '@mui/material';
import { DateTime } from 'luxon';
import { IconsContainer } from '../../components/IconsContainer/IconsContainer';
import { ContainerBox } from '../ContainerBox/ContainerBox';
import { Title } from '../../components/Title/Title';
import { CommonAvatar } from '../../components/CommonAvatar/CommonAvatar';
import { tokenDetailedInfoSelector } from '../../store/slices/tokenDetailedInfo';
import css from './token.module.scss';
import { TokenInfoSkeleton } from './TokenInfoSkeleton';

export const TokenInfo = () => {
  const { tokenDetailedInfo } = useSelector(
    tokenDetailedInfoSelector.getTokenDetailedInfo
  );

  if (!tokenDetailedInfo.bio) {
    return <TokenInfoSkeleton />;
  }

  return (
    <>
      <ContainerBox mt={{ mobile: 15, desktopLarge: 20 }}>
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
              <CommonAvatar src={tokenDetailedInfo?.token_logo} />
              <Box sx={{ ml: { tablet: 4 } }}>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    textAlign: { mobile: 'center' },
                    my: { mobile: 2 },
                  }}
                >
                  {tokenDetailedInfo?.token_name}
                </Typography>
                <IconsContainer icons={tokenDetailedInfo?.social} />
              </Box>
            </Box>

            <Typography
              variant="p"
              component="p"
              my={{ mobile: 6.5, tablet: 3.75 }}
            >
              {tokenDetailedInfo?.bio}
            </Typography>
          </Grid>
          <Grid item tablet={6} sx={{ width: '100%', height: '100%' }}>
            {/*
           ---------- тут подумать - сделать обычными div'ми или графиками? --------- 
            */}
          </Grid>
        </Grid>
        <Box sx={{ display: 'inline-flex' }} mt={1}>
          {tokenDetailedInfo?.audit && (
            <Box fontSize={{ mobile: 16, tablet: 20 }} mr={4}>
              <Typography variant="subtitle1" fontSize="inherit">
                Audit
              </Typography>
              <Typography variant="caption" fontWeight="500" fontSize="inherit">
                {tokenDetailedInfo.audit}
              </Typography>
            </Box>
          )}

          {tokenDetailedInfo?.project_age && (
            <Box fontSize={{ mobile: 16, tablet: 20 }}>
              <Typography variant="subtitle1" fontSize="inherit">
                Age
              </Typography>
              <Typography variant="caption" fontWeight="500" fontSize="inherit">
                {DateTime.fromSeconds(
                  tokenDetailedInfo.project_age
                ).toRelative()}
              </Typography>
            </Box>
          )}
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
