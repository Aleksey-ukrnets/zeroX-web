import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Main from './pages/Main';
import MarketInfo from './pages/MarketInfo';
import Pro from './pages/Pro';
import Container from '@mui/material/Container';
import { InnerTokenInfo } from './pages/InnerTokenInfo';
import Footer from './components/Footer';
import Registration from './ui/Modals/Registration';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions as twitterActions } from './store/slices/twitterCards';
import {actions as tokenActions } from './store/slices/tokenCards'
import axios from 'axios';
function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    //twitterCards
    axios.get('https://zerox.pro/api/twitter').then((resp) => {
      console.log(resp, 'twitter');
      dispatch(twitterActions.setTwitterCards([...resp?.data?.data]))
    });
    //tokenCards
    axios.get('https://zerox.pro/api/token_list?limit=6')
    .then((resp) => {
       console.log(resp,'response')
       dispatch(tokenActions.setTokenCards([...resp?.data?.data]))
    })
  },[]);
 
  return (
    <>
      <Container maxWidth="desktopLarge">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<InnerTokenInfo />} />
          <Route path="/market" element={<MarketInfo />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/tokeninfo" element={<InnerTokenInfo />} />
        </Routes>
        {/* <Registration /> */}
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default App;
