import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider
import { store } from './redux/store'; // Import Redux store
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);