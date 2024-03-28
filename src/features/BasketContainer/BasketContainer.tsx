import BasketProduct from '@features/BasketProduct';
import ProductDetails from '@features/ProductDetails';
import { useAppDispatch, useAppSelector } from '@hooks';
import { fetchBasketList } from '@store/slices/BasketSlice';
import { useEffect } from 'react';
import { Text, Wrapper } from './styled';

const BasketContainer = () => {
  const basketItems = useAppSelector(state => state.basket.list);
  const basketLength = useAppSelector(state => state.basket.countList.length);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBasketList());
  }, [dispatch, basketLength]);

  return (
    <>
      <ProductDetails />

      <Wrapper>
        {!basketLength ? (
          <Text>Корзина пуста</Text>
        ) : (
          basketItems.map(item => {
            return <BasketProduct key={item.id} {...item} />;
          })
        )}
      </Wrapper>
    </>
  );
};

export default BasketContainer;
