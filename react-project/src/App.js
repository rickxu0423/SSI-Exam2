import React from 'react';
import BaseRouter from './routes'
import { HashRouter as Router } from 'react-router-dom';
import Layout from './containers/Layout'

import { Provider } from 'react-redux';
import store from './store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store);

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Layout>
              <BaseRouter />
            </Layout>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}                               

export default App;

