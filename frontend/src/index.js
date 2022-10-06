import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { BlogContextProvider } from './context/blogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </React.StrictMode>
);


