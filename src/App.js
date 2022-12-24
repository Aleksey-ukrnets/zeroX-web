import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Main from './pages/Main';
import MarketInfo from './pages/MarketInfo';
import Pro from './pages/Pro';
import Container from '@mui/material/Container';
import { InnerTokenInfo } from './pages/InnerTokenInfo';
import Footer from './components/Footer';

function App() {
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
      </Container>
      <Footer />
    </>
  );
}

export default App;
