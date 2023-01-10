import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Box } from '@mui/material';

import { TokenInfo } from '../ui/TokenInfo/TokenInfo';
import { ChartTopHolders } from '../ui/ChartTopHolders/ChartTopHolders';
import { LastTopTransactions } from '../ui/LastTopTransactions/LastTopTransactions';
import { actions as actionTokenDetailedInfo } from '../store/slices/tokenDetailedInfo';
import { tokenCardsSelector } from '../store/slices/tokenCards';
import CardList from '../components/CardList/CardList';
import { Title } from '../components/Title/Title';
import { TwitterContainer } from '../components/TwitterContainer/TwitterContainer';
import { actions as tokenActions } from '../store/slices/tokenCards';
export const InnerTokenInfo = () => {
  const dispatch = useDispatch();

  const { tokenCardsAnalyzed } = useSelector(tokenCardsSelector.getTokenCards);

  useEffect(() => {
    const getTokenDetailedInfo = async (tokenID) => {
      try {
        const tokenData = await axios
          .get('https://zerox.pro/api/token_data?token_id&network=1')
          .then((info) => info.data);
        dispatch(actionTokenDetailedInfo.setTokenDetailedInfo(tokenData.data));
      } catch {
        console.error('getTokenDetailedInfo: getData error');
      }
    };
    getTokenDetailedInfo();

    axios
      .get('https://zerox.pro/api/token_list?limit=3&filter_type=analyzed')
      .then((resp) => {
        dispatch(tokenActions.setTokenCardsAnalyzed([...resp?.data?.data]));
      });
  }, [dispatch]);

  return (
    <main className="mt-16 sm:mt-24 ">
      <TokenInfo />
      <TwitterContainer />
      <ChartTopHolders />
      <LastTopTransactions />
      <Box my={3}>
        <Title color="#fff">Watch more</Title>
      </Box>
      
      <CardList tokenCards={tokenCardsAnalyzed} analyzed />
    </main>
  );
};
