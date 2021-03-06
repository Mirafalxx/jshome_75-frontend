import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import App from "./App";
import thunkMiddleware from "redux-thunk";
import vigenereReducer from "./store/vigenereReducer";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  vigenere: vigenereReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
