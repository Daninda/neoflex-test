import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import BasketContainer from '../../features/BasketContainer';
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
        <div>Кнопка покупки</div>
      </Wrapper>
    </>
  );
};

export default Basket;
