import { Box } from '@mui/material';
import { TokenInfo } from '../ui/TokenInfo/TokenInfo';
import TwitterCard from '../ui/TwitterCard/TwitterCard';

import { useSelector } from 'react-redux';
import { twitterCardsSelector } from '../store/slices/twitterCards';
import { ChartTopHolders } from '../ui/ChartTopHolders/ChartTopHolders';

export const InnerTokenInfo = () => {
  const { twitterCards } = useSelector(twitterCardsSelector.getTwitterCards);
  return (
    <main className="mt-16 sm:mt-24 ">
      <TokenInfo />
      {/* -------------- Twitter -------------- */}
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
      {/* -------------- /Twitter -------------- */}
      <ChartTopHolders />
    </main>
  );
};
