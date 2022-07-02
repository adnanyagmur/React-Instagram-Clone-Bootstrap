import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-bootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <ThemeProvider dir="rtl">
        <App />
      </ThemeProvider>
    </BrowserRouter>

  </React.StrictMode>
);
