import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const Basket: FC = () => {
  return (
    <>
      <Helmet>
        <title>Корзина - QPick</title>
      </Helmet>
      <div>Basket page</div>
    </>
  );
};

export default Basket;
