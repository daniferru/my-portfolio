import React from 'react';
import './NavLink.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div>
          <h1 className="nav-title">Daniella Ferrufino</h1>
          <h2 className="nav-subtitle">Full Stack Web Developer</h2>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;