import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Main from './pages/Main';
import MarketInfo from './pages/MarketInfo';
import Pro from './pages/Pro';
import Container from '@mui/material/Container';
import { InnerTokenInfo } from './pages/InnerTokenInfo';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions as twitterActions } from './store/slices/twitterCards';
import { actions as tokenActions } from './store/slices/tokenCards';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //twitterCards
    axios.get('https://zerox.pro/api/twitter').then((resp) => {
      dispatch(twitterActions.setTwitterCards([...resp?.data?.data]));
    });
    //tokenCards all
    axios.get('https://zerox.pro/api/token_list?limit=6').then((resp) => {
      dispatch(tokenActions.setTokenCards([...resp?.data?.data]));
    });
    //tokenCards launchpad
    axios.get('https://zerox.pro/api/token_list?limit=6&filter_type=launchpad').then((resp) => {
      dispatch(tokenActions.setTokenCardsLaunchpad([...resp?.data?.data]));
    });
    //tokenCards algo
    axios.get('https://zerox.pro/api/token_list?limit=6&filter_type=algo').then((resp) => {
      dispatch(tokenActions.setTokenCardsAlgo([...resp?.data?.data]));
    });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container maxWidth="desktopLarge">
        <Header />
        <Toaster containerStyle={{ top: '70px' }} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<InnerTokenInfo />} />
          <Route path="/market" element={<MarketInfo />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/tokeninfo" element={<InnerTokenInfo />} />
        </Routes>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default App;
