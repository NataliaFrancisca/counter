import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from "./styles/global";
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import { countReducer } from './reducers/reducer';
const store = createStore(countReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
