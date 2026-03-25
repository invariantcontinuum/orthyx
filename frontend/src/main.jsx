import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CookieProvider } from './contexts/CookieContext';
import './locales/i18n';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CookieProvider>
          <App />
        </CookieProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
