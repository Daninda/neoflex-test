import ProductsContainer from '@features/ProductsContainer';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const Home: FC = () => {
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
