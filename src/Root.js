import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Importez votre magasin redux

import App from './App'; // Importez votre composant App

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;