import React from 'react';
import ReactDOM from 'react-dom/client'; // Importer createRoot à partir de react-dom/client
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root')); // Utilisation de createRoot de react-dom/client

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
