import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container } from '@mui/material';

import { Header } from './components/Header';
import { SearchHeader } from './components/search-header';
import { Footer } from './components/Footer';
import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';

import Anime from './pages/Anime.jsx';





function App() {
  const [animeList, SetAnimeList] = React.useState([]);
  const [search, SetSearch] = useState([]);

  const urlApi = 'https://raw.githubusercontent.com/jikan-me/jikan-rest/master/storage/api-docs/api-docs.json';

  useEffect(() => {
    fetch(urlApi).then(res => {
      return res.json()
    }).then((arr) => {
      console.log()
    });
  }, [])



  // <Router>
  //   <Routes>
  //     <Route path="/home" element={<Home />} />
  //     <Route path="/auth" element={<Auth />} />
  //   </Routes>
  // </Router>

  return (
    <>
      <div className='App'>
        <div className='wrapper'>
          <Container fixed>
            <Header name="Кинотеатр">
              <div className='header__links'>
                <ul>
                  <li><Link to='/about'>Главная</Link></li>
                  <li><Link to="/auth">Сериалы</Link></li>
                  <li><Link to=""> Фильмы</Link></li>
                  <li><Link to="">Новости</Link></li>
                  <li><Link to="">О проекте</Link></li>
                </ul>
              </div>
            </Header>
            <div className='main'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/anime" element={<Anime />} />
              </Routes>
              {/* <Home /> */}
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
