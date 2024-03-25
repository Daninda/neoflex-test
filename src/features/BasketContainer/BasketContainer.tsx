import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchBasketList } from '../../store/slices/BasketSlice';
import BasketProduct from '../BasketProduct';
import { Text, Wrapper } from './styled';

const BasketContainer = () => {
  const basketItems = useAppSelector(state => state.basket.list);
  const basketLength = useAppSelector(state => state.basket.countList.length);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBasketList());
  }, [dispatch, basketLength]);

  return (
    <Wrapper>
      {!basketLength ? (
        <Text>Корзина пуста</Text>
      ) : (
        basketItems.map(item => {
          return <BasketProduct key={item.id} {...item} />;
        })
      )}
    </Wrapper>
  );
};

export default BasketContainer;
