import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { MenuProvider } from './components/context/MenuContext';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Router>
      <MenuProvider>
        <App />
      </MenuProvider>
    </Router>
  </React.StrictMode>
);
