import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/globals.css';
import Home from './routes/Home';
import Services from './routes/Services';
import UXDesignStudio from './routes/UiUXWorkflow'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/services', element: <Services /> }, // Assuming Home handles services section
  { path: '/services/UiUx-workflow', element: <UXDesignStudio /> }

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
