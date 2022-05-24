import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { HomePage } from './pages/home-page';
import { Header } from './components/Header';



function App() {
  return (
    // <Router>
    // <div className='App'>
    // <Header />
    // <Routes>
    //       <Route path="/">
    //         <HomePage />
    //       </Route>
    // </Routes>
    // </div>
    // </Router>
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
