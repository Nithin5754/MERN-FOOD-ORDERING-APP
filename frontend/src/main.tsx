import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithNavigator from './Auth/Auth0ProviderWithNavigator';
import AppRoutes from './AppRoutes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>

      <Auth0ProviderWithNavigator>
 
      <AppRoutes/> 
      </Auth0ProviderWithNavigator>

    </Router>
  </React.StrictMode>,
)
