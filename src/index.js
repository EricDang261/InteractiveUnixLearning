import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ValueProvider } from './components/context/ValueContext';
import { CheckBoxProvider } from './components/context/CheckBoxContext';
import { AuthProvider } from './components/context/AuthContext';
import { UsernameProvider } from './components/context/UsernameContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UsernameProvider>
    <AuthProvider>
      <CheckBoxProvider>
        <ValueProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ValueProvider>  
      </CheckBoxProvider>
    </AuthProvider>
  </UsernameProvider>
);
