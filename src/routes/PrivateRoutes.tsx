import { FC } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { checkPathMatch, paths } from './helpers';

const PrivateRoutes: FC = () => {
  const location = useLocation();

  const isMatch = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route path='*' element={!isMatch ? <Navigate to={paths.home} /> : null} />
    </Routes>
  );
};

export default PrivateRoutes;
