

import Header from './components/Header';
import './App.css'
import Mainnav from './components/Mainnav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
// import Trending from './components/Trending';
import Movies from './components/Movies';
import TVseries from './components/TVseries';
import Search from './components/Search';
import Trending from './components/trending/Trending';

function App() {
  return (
    <BrowserRouter>
    <Header/>
   <div className='app'>
   <Container>
   <Routes>
      <Route path="/" element={<Trending />}>
      </Route>
      <Route path="/movies" element={<Movies />}>
      </Route>
      <Route path="/series" element={<TVseries />}>
      </Route>
      <Route path="/search" element={<Search />}>
      </Route>
    </Routes>
        </Container>
   </div>
   <Mainnav/>
   </BrowserRouter>
  );
}

export default App;
