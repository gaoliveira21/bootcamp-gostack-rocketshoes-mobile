import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';

import './config/ReactotronConfig';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#141419" />
      <Routes />
    </Provider>
  );
}
