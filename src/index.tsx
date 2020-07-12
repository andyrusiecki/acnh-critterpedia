import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import middleware from './middleware';

import './index.scss';
import App from './components/app';
import { getStateFromStorage, saveStateToStorage } from './util';
import { InitialRootState } from './data';
import { ActionType } from './actions';

// Restore state from storage
const startingState = getStateFromStorage() || InitialRootState;

// update current time in state
const now = new Date();
startingState.time.hour = now.getHours();
startingState.time.month = now.getMonth() + 1;

// Create store
const store = createStore(
  rootReducer,
  startingState,
  middleware,
);

// Save state to storage on state change
store.subscribe(() => {
  saveStateToStorage(store.getState());
});

// timer to update current time in state
setInterval(() => {
  const state = store.getState();
  const now = new Date();
  const hour = now.getHours();
  const month = now.getMonth() + 1;

  if (hour !== state.time.hour || month !== state.time.month) {
    store.dispatch({
      type: ActionType.SetCurrentTime,
      hour,
      month,
    });
  }
}, 60 * 1000);

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
