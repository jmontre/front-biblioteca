import { Outlet } from 'react-router-dom';
import { MainNavigation } from '../../components/MainNavigation/index';
import Footer from '../../components/Footer';

export const RootPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      
      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};