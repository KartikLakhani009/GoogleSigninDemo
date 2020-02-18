/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
// import reducer from './Reducer/EmployeeDetailsReducer';
import reducer from './Reducer/index';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const Appcontainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Appcontainer);
