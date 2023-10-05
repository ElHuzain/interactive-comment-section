import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './imports.css';
import GlobalStyles from './Components/Styled/GlobalStyles';

import { Provider } from 'react-redux';
import store from './Data/ReduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);
