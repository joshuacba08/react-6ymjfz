import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Footer from './components/Footer';

import './style.css';

/* ⚠ Por favor leer el archivo readme 🙏*/
export default function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <Hero title="El Rey de la Cerveza" />
      <ItemListContainer />
      <ItemDetailContainer id={1} />
      <Footer />
    </>
  );
}
