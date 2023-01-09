import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {
  actions as twitterActions,
  twitterCardsSelector,
} from '../../store/slices/twitterCards';
import { Box } from '@mui/material';
import TwitterCard from '../../ui/TwitterCard/TwitterCard';

// Здесь будет инкапсулирована логика Twitter. В зависимости от пропсов рендерим слайдером или сеткой
export const TwitterContainer = () => {
  const dispatch = useDispatch();
  const { twitterCards } = useSelector(twitterCardsSelector.getTwitterCards);
  useEffect(() => {
    axios.get('https://zerox.pro/api/twitter').then((resp) => {
      dispatch(twitterActions.setTwitterCards([...resp?.data?.data]));
    });
  }, [dispatch]);

  return (
    <>
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
    </>
  );
};
