import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { main } from './press';

ReactDOM.createRoot(
  (() => {
    main();
    const app = document.createElement('div');
    document.body.append(app);
    return app;
  })(),
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
