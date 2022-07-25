import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { GlobalStyle } from "./styles/global";
import { Provider } from 'react-redux';

import { createStore} from 'redux';
import { rootReducer } from './reducers';

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
