import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Web3 from 'web3';
import { ethers } from 'ethers';
import { getParsedEthersError } from '@enzoferey/ethers-error-parser';
import axios from 'axios';

import { Alert, Box, Snackbar } from '@mui/material';
import { ConnectWallet } from '../ui/ConnectWallet/ConnectWallet';
import { ContainerBox } from '../ui/ContainerBox/ContainerBox';
import {
  actions as actionsAuthMetamask,
  authMetamaskSelector,
} from '../store/slices/authMetamask';

export const Authorization = () => {
  const dispatch = useDispatch();

  const [walletInstall, setWalletInstall] = useState(null);
  const [infoToast, setInfoToast] = useState(false);
  const [disableMetamaskBtn, setDisableMetamaskBtn] = useState(false);
  const web3 = useRef(new Web3(window.ethereum)).current;
  const accAddress = useSelector(authMetamaskSelector.getAuthMetamask);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;

    setInfoToast({ show: false });
  };

  const handleAccountsChanged = useCallback(
    async (accounts) => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(accAddress, 'accAddress');
      let currentAccount = null;
      if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
        setInfoToast({ show: true, message: 'Metamask is not connected' });
        dispatch(
          actionsAuthMetamask.setAuthMetamask({
            address: null,
            isAuth: false,
          })
        );
      } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        setDisableMetamaskBtn(true);
        console.log('user account changes');
        const signer = provider.getSigner();
        const hashSign = await signer.signMessage(
          'Authorization in the Zerox application'
        );
        axios({
          method: 'post',
          url: 'https://zerox.pro/api/login',
          body: {
            accountAddress: web3.utils.toChecksumAddress(currentAccount),
            signature: hashSign,
          },
        }).then((test) => console.log(test));

        setDisableMetamaskBtn(false);
        dispatch(
          actionsAuthMetamask.setAuthMetamask({
            address: web3.utils.toChecksumAddress(currentAccount),
            isAuth: true,
          })
        );
        console.log(web3.utils.toChecksumAddress(currentAccount));
      }
    },
    [accAddress, dispatch, web3.utils]
  );

  const signInMetamask = useCallback(async () => {
    try {
      const response = await window.ethereum
        .request({
          method: 'eth_requestAccounts',
        })
        .then(handleAccountsChanged)
        .catch((err) => {
          switch (true) {
            case getParsedEthersError(err).context === 'ACTION_REJECTED':
              setInfoToast({
                show: true,
                message: 'Metamask request rejected',
              });
              break;
            default:
              console.log(getParsedEthersError(err), '=========');
          }
          setDisableMetamaskBtn(false);
          if (err.code === 4001) {
            console.log('Please connect to MetaMask.');
          }
          // else {
          //   setInfoToast({ show: true, message: 'Request already pending' });
          //   console.error(err);
          // }
        });
      console.log(response);
    } catch (e) {
      console.log('signInMetamask:', e);
    }
  }, [handleAccountsChanged]);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      // window.ethereum.on('networkChanged', handleNetworkChanged);

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('disconnect', (error) => console.log(error));

      console.log('Metamask has');
    } else if (!walletInstall) {
      console.log('Metamask NOT install');
      setWalletInstall(`Install Metamask`);
    }

    return () => {
      console.log('removeListener useEffect');
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
    };
  }, [handleAccountsChanged, signInMetamask, walletInstall]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={infoToast?.show}
        autoHideDuration={5000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleClose }}
        sx={{ top: 70 }}
      >
        <Alert
          onClose={handleClose}
          severity="warning"
          sx={{
            maxWidth: {
              mobile: '90%',
              tablet: '80%',
              laptop: '50%',
            },
            backgroundColor: 'rgb(149 91 0)',
          }}
        >
          {infoToast?.message}
        </Alert>
      </Snackbar>

      <Box mx={{ mobile: 0, tablet: 15 }}>
        <ContainerBox mt={15}>
          <ConnectWallet
            signInMetamask={signInMetamask}
            disableMetamaskBtn={disableMetamaskBtn}
          />
        </ContainerBox>
      </Box>
    </>
  );
};
