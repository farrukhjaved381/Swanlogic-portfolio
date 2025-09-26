import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
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
import FurnitureShowcase from './routes/FurniturePortfolio';
import WorkplaceConsultancy from './routes/WorkplaceConsultancy';
import RedefneGlobalTalent from './routes/RedefiningTalent'
import DigitalPresence from './routes/RefreshingDigitalPresence';
import CaseStudy from './routes/FurnitureCaseStudy';
import QuoteRequestForm from './routes/quoteRequestForm';
import Contact from './routes/contact';

// Layout component with smooth scroll to top on route change
function Layout() {
  const location = useLocation();

  React.useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return <Outlet />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'services/UiUx-workflow', element: <UXDesignStudio /> },
      { path: 'services/javascript-workflow', element: <JavascriptWorkflow /> },
      { path: 'services/mobile-app', element: <MobileAppWorkflow /> },
      { path: 'services/ecommerce', element: <EcommerceWorkflow /> },
      { path: 'services/no-code-workflow', element: <NoCodeWorkflow /> },
      { path: 'services/python-workflow', element: <PythonWorkflow /> },
      { path: 'portfolio', element: <PortfolioShowcase /> },
      { path: 'portfolio/branding-portfolio', element: <BrandingPortfolio /> },
      { path: 'portfolio/furniture-design', element: <FurnitureShowcase /> },
      { path: 'portfolio/workplace-consultancy', element: <WorkplaceConsultancy /> },
      { path: 'portfolio/global-talent-group', element: <RedefneGlobalTalent /> },
      { path: 'portfolio/digital-presence', element: <DigitalPresence /> },
      { path: 'portfolio/furniture-design-case-study', element: <CaseStudy /> },
      { path: 'quote', element: <QuoteRequestForm /> },
      { path: 'contact', element: <Contact /> }
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);