import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';

import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
