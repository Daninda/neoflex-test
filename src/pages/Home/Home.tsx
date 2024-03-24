import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductsContainer from '../../features/ProductsContainer';
import { useAppDispatch } from '../../hooks';
import { fetchProducts } from '../../store/slices/ProductsSlice';

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Главная - QPick</title>
      </Helmet>
      <ProductsContainer />
    </>
  );
};

export default Home;
