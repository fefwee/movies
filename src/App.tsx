import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Header from './pages/header/Header';
import Main from './pages/main/Main';
import LeftMenu from './pages/leftMenu/LeftMenu';
import Context from './context/Context';
import FavoriteMoviePage from './pages/favoriteMoviePage/FavoriteMoviePage';
import HistoryMoviePage from './pages/historyMoviePage/HistoryMoviePage';
import UserProfilePage from './pages/userProfilePage/UserProfilePage';
import SingleMoviePage from './components/singleMoviePage/SingleMoviePage';


function App() {

  const [favorite, setFavorite] = useState([]);

  const value = {
    favorite,
    setFavorite
  }



  useEffect(() => {
    console.log(favorite)
  }, [favorite])


  return (
    <BrowserRouter>
      <Context.Provider value={value}>
        <div className='container'>
          <header>
            <Header />
          </header>
          <main>
            <Routes>
              <Route path="favorite" element={<FavoriteMoviePage />}></Route>
              <Route path="history" element={<HistoryMoviePage />}></Route>
              <Route path="/" element={<Main />}></Route>
              <Route path="profile" element={<UserProfilePage />}></Route>
              <Route path=":id" element={<SingleMoviePage />}></Route>
            </Routes>
          </main>
          <aside>
            <LeftMenu />
          </aside>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
