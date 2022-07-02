import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SSRProvider } from 'react-bootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <SSRProvider dir="rtl">
        <App />
      </SSRProvider>
    </BrowserRouter>

  </React.StrictMode>
);
