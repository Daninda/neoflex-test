import { useEffect } from 'react';
import BasketProduct from '../../components/BasketProduct';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchBasket } from '../../store/slices/BasketSlice';
import { Wrapper } from './styled';

const BasketContainer = () => {
  const basketItems = useAppSelector(state => state.basket.list);
  const basketLength = useAppSelector(state => state.user.basket.length);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBasket());
  }, [dispatch, basketLength]);

  return (
    <Wrapper>
      {basketItems.map(item => {
        return <BasketProduct key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default BasketContainer;
