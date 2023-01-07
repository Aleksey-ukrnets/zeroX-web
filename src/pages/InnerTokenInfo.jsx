import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Box } from '@mui/material';

import { TokenInfo } from '../ui/TokenInfo/TokenInfo';
import TwitterCard from '../ui/TwitterCard/TwitterCard';
import { twitterCardsSelector } from '../store/slices/twitterCards';
import { ChartTopHolders } from '../ui/ChartTopHolders/ChartTopHolders';
import { LastTopTransactions } from '../ui/LastTopTransactions/LastTopTransactions';
import { actions as actionTokenDetailedInfo } from '../store/slices/tokenDetailedInfo';
import { tokenCardsSelector } from '../store/slices/tokenCards';
import CardList from '../components/CardList/CardList';
import { Title } from '../components/Title/Title';

export const InnerTokenInfo = () => {
  const dispatch = useDispatch();
  const { twitterCards } = useSelector(twitterCardsSelector.getTwitterCards);

  const { tokenCards } = useSelector(tokenCardsSelector.getTokenCards);

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
  }, [dispatch]);

  return (
    <main className="mt-16 sm:mt-24 ">
      <TokenInfo />
      {/* -------------- Twitter -------------- */}
      {twitterCards.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            overflowX: 'scroll',
            gap: '20px',
            padding: '20px 0',
          }}
          my={5}
        >
          {twitterCards.map((el, index) => {
            return <TwitterCard key={index} data={el} />;
          })}
        </Box>
      )}
      {/* -------------- /Twitter -------------- */}
      <ChartTopHolders />
      <LastTopTransactions />
      <Box my={3}>
        <Title color="#fff">Watch more</Title>
      </Box>
      <CardList tokenCards={tokenCards} />
    </main>
  );
};
