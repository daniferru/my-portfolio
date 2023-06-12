import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <section>
          <h2>Contact Me</h2>
          <div className="social-links">
            <a href="https://github.com/daniferru" target="_blank" rel="noopener noreferrer">
              <svg className="github-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297C5.37.297 0 5.667 0 12.297c0 5.424 3.438 10.038 8.207 11.63.6.112.82-.246.82-.547 0-.27-.01-.985-.015-1.93-3.338.724-4.042-1.61-4.042-1.61-.546-1.39-1.334-1.76-1.334-1.76-1.09-.744.083-.73.083-.73 1.206.086 1.838 1.236 1.838 1.236 1.07 1.832 2.808 1.304 3.494.998.108-.762.42-1.283.762-1.578-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.465-2.38 1.235-3.222-.123-.304-.536-1.526.117-3.178 0 0 1.008-.32 3.3 1.23.957-.266 1.98-.398 3-.404 1.02.006 2.043.138 3 .404 2.29-1.55 3.297-1.23 3.297-1.23.655 1.652.242 2.874.12 3.178.77.842 1.23 1.912 1.23 3.222 0 4.61-2.805 5.622-5.475 5.92.43.372.815 1.105.815 2.224 0 1.605-.015 2.898-.015 3.297 0 .303.21.664.825.55C20.565 22.33 24 17.717 24 12.297 24 5.667 18.63.297 12 .297z"/>
              </svg>
              GitHub
            </a>
            <a href="mailto:danferrufino@icloud.com">
              <svg className="email-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v3.76l-9 4.5-9-4.5V6h18zm0 5.62l-8.51 4.26a1 1 0 01-.98 0L3 11.62V18h18v-1.38z"/>
              </svg>
              Email
            </a>
          </div>
        </section>
        <p>&copy; 2023 Daniella Ferrufino. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;