import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';
import { MediaQueryProvider } from './media/MediaQueryProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MediaQueryProvider>
        <App />
      </MediaQueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
