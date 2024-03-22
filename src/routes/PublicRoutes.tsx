import { FC, lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { checkPathMatch, paths } from './helpers';

const HomePage = lazy(() => import('../pages/Home'));
const Basket = lazy(() => import('../pages/Basket'));
const Details = lazy(() => import('../pages/Details'));

const PublicRoutes: FC = () => {
  const location = useLocation();

  const isMatch = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.basket} element={<Basket />} />
      <Route path={paths.details} element={<Details />} />

      <Route path='*' element={!isMatch ? <Navigate to={paths.home} /> : null} />
    </Routes>
  );
};

export default PublicRoutes;
