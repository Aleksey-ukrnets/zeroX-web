import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Main from "./pages/Main";
import MarketInfo from "./pages/MarketInfo";
import Pro from "./pages/Pro";



function App() {
  return (
    <>
      <Header />
         <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/market" element={<MarketInfo />} />
          <Route path="/pro" element={<Pro />} />
         </Routes>
    </>
  );
}

export default App;
