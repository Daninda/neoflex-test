import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductsContainer from '../../components/ProductsContainer';

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
