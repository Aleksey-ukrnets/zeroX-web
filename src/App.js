import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import Main from './pages/Main';
import MarketInfo from './pages/MarketInfo';
import Pro from './pages/Pro';
import Container from '@mui/material/Container';
import { InnerTokenInfo } from './pages/InnerTokenInfo';
import { Authorization } from './pages/Authorization';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="desktopLarge">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<InnerTokenInfo />} />
          <Route path="/market" element={<MarketInfo />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/tokeninfo" element={<InnerTokenInfo />} />
          <Route path="/auth" element={<Authorization />} />
        </Routes>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default App;
