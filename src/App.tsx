import React from 'react';
import NavLink from './components/NavLink'
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
        <NavLink />
        <Portfolio />
        <Footer />
    </div>
  );
}

export default App;