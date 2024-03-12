import React, { useState } from 'react';
import './index.css'
import Header from './pages/header/Header';
import Main from './pages/main/Main';
import LeftMenu from './pages/leftMenu/LeftMenu';
import RightPanel from './pages/rightPanel/RightPanel';
import Footer from './pages/footer/Footer';
import Context from './context/Context';


function App() {

  const [idBook, setIdBook] = useState(5283168);

  const value = {
    idBook,
    setIdBook
  }
  return (
    <Context.Provider value={value}>
      <div className='container'>
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <aside>
          <LeftMenu />
        </aside>
        <aside className='right-panel'>
          <RightPanel />
        </aside>
        <footer>
          <Footer />
        </footer>
      </div>
    </Context.Provider>
  );
}

export default App;
