import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithNavigator from './Auth/Auth0ProviderWithNavigator';
import AppRoutes from './AppRoutes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient=new QueryClient({
   defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
   }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router >
      <QueryClientProvider  client={queryClient}>

      <Auth0ProviderWithNavigator>
 
      <AppRoutes/> 
      </Auth0ProviderWithNavigator>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)
