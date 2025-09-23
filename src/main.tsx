import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/globals.css';
import Home from './routes/Home';
import Services from './routes/Services';
import UXDesignStudio from './routes/UiUXWorkflow'
import PortfolioShowcase from './routes/portfolio';
import JavascriptWorkflow from './routes/javascriptWorkflow';
import PythonWorkflow from './routes/pythonWorkflow';
import MobileAppWorkflow from './routes/mobile-appWorkflow';
import EcommerceWorkflow from './routes/ecommerceWorkflow';
import NoCodeWorkflow from './routes/no-codeWorkflow';
import BrandingPortfolio from './routes/BrandingPortfolio';


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/services', element: <Services /> }, // Assuming Home handles services section
  { path: '/services/UiUx-workflow', element: <UXDesignStudio /> },
  { path: '/services/javascript-workflow', element: <JavascriptWorkflow /> },
  { path: '/services/mobile-app', element: <MobileAppWorkflow /> },
  { path: '/services/ecommerce', element: <EcommerceWorkflow /> },
  { path: '/services/no-code-workflow', element: <NoCodeWorkflow /> },
  { path: '/services/python-workflow', element: <PythonWorkflow /> },
  { path: '/portfolio', element: <PortfolioShowcase/> }, // Placeholder
  { path: '/portfolio/a-workplace-for-branding-portfolio', element: <BrandingPortfolio /> },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);