import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

import Header from './components/Header';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#141419" />
      <Header />
      <Routes />
    </>
  );
}
