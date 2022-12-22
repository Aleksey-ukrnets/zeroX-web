import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Main from './pages/Main';
import MarketInfo from './pages/MarketInfo';
import Pro from './pages/Pro';
import Container from '@mui/material/Container';
import { ContainerBox } from './ui/ContainerBox/ContainerBox';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/market" element={<MarketInfo />} />
          <Route path="/pro" element={<Pro />} />
        </Routes>
        {/* <ContainerBox>тут будет элементы </ContainerBox> */}
      </Container>
    </>
  );
}

export default App;
