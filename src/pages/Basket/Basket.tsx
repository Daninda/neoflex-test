import BasketContainer from '@features/BasketContainer';
import Buy from '@features/Buy';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Title, Wrapper } from './styled';

const Basket: FC = () => {
  return (
    <>
      <Helmet>
        <title>Корзина - QPick</title>
      </Helmet>
      <Title>Корзина</Title>
      <Wrapper>
        <BasketContainer />
        <Buy />
      </Wrapper>
    </>
  );
};

export default Basket;
