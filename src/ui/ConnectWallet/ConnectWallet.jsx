import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import { Title } from '../../components/Title/Title';
import { IconMetamaskLogo } from '../../components/Icons/IconMetamaskLogo';
import { IconGooglePlay } from '../../components/Icons/IconGooglePlay';
import { IconAppStore } from '../../components/Icons/IconAppStore';

import variables from '../../styles/variables.scss';

export const ConnectWallet = ({ signInMetamask, disableMetamaskBtn }) => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <Title fontSize={{ mobile: 24, tablet: 40 }}>Connect Wallet</Title>
      <Typography
        align="center"
        my={4}
        maxWidth={{ mobile: 'none', tablet: '800px' }}
        sx={{
          fontSize: { mobile: 16, tablet: 24 },
        }}
      >
        Start by connecting with one of the wallets below. Be sure to store your
        private keys or seed phrase securely. Never share them with enyone
      </Typography>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        sx={{ cursor: 'pointer' }}
      >
        <Button
          size="small"
          disabled={disableMetamaskBtn}
          onClick={signInMetamask}
          sx={{
            backgroundColor: '#fff',
            width: { mobile: '60px', tablet: '78px' },
            height: { mobile: '60px', tablet: '78px' },
            padding: 1,
            outline: '4px solid rgba(218, 255, 1, 1)',
            '&:hover': {
              backgroundColor: '#fff',
              opacity: '0.9',
            },
          }}
        >
          {disableMetamaskBtn ? <CircularProgress /> : <IconMetamaskLogo />}
        </Button>
        <Typography
          mt={2}
          sx={{
            fontSize: { mobile: 20, tablet: 24 },
          }}
        >
          Metamask
        </Typography>
      </Box>

      <Box my={2} display={{ mobile: 'block', desktop: 'none' }}>
        <Title fontSize={{ mobile: 24 }} color={variables.colorPurple}>
          Haven't got wallet yet?
        </Title>
        <Typography
          align="center"
          my={3}
          sx={{
            fontSize: { mobile: 20 },
          }}
        >
          Download app
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ flexDirection: 'column' }}
          >
            <IconAppStore height="40px" width="40px" />
            <Typography mt={2} align="center">
              Apple Store
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ flexDirection: 'column' }}
          >
            <IconGooglePlay height="40px" width="40px" />
            <Typography mt={2} align="center">
              Google play
            </Typography>
          </Box>
        </Stack>
        <Typography
          align="center"
          my={3}
          sx={{
            fontSize: { mobile: 20 },
          }}
        >
          Set up your wallet
        </Typography>
      </Box>
      <Typography
        my={{ mobile: 0, tablet: 2 }}
        sx={{
          fontSize: { mobile: 24, tablet: 32 },
          color: variables.colorPurple,
          textAlign: 'center',
        }}
      >
        Connect wallet to{' '}
        <span style={{ color: variables.colorLimeAccent }}>ZeroX</span>
      </Typography>
    </Box>
  );
};
