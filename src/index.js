
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './pages/App';
import Profile from './pages/Profile';

const render = () => {  
  ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/profile" element={<Profile />} store={store} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
  };

store.subscribe(render);
render();