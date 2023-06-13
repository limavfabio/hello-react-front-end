import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// @ts-expect-error - This Element#root can be null, but we know it won't be.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
