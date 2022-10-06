import { Route, Routes } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Footer } from '../components/Footer/Footer';
import { SinglePokemonPage } from '../components/SinglePokemonPage/SinglePokemonPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokemon/:id" element={<SinglePokemonPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
