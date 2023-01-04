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

export const InnerTokenInfo = () => {
  const dispatch = useDispatch();
  const { twitterCards } = useSelector(twitterCardsSelector.getTwitterCards);

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
        >
          {twitterCards.map((el, index) => {
            return <TwitterCard key={index} data={el} />;
          })}
        </Box>
      )}
      {/* -------------- /Twitter -------------- */}
      <ChartTopHolders />
      <LastTopTransactions />
    </main>
  );
};
