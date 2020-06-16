import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import middleware from './middleware';

import './index.scss';
import App from './components/app';
import { getStateFromStorage, saveStateToStorage, InitialRootState } from './shared';

// Restore state from storage
const restoredState = getStateFromStorage();

// Create store
const store = createStore(
  rootReducer,
  restoredState || InitialRootState,
  middleware,
);

// Save state to storage on state change
store.subscribe(() => {
  saveStateToStorage(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
