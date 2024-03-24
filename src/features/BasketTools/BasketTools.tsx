import { FC } from 'react';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addOneToBasket, removeOneFromBasket } from '../../store/slices/UserSlice';
import { BasketButton, Count, Wrapper } from './styled';

type Props = {
  id: number;
};

const BasketTools: FC<Props> = ({ id }) => {
  const count = useAppSelector(state => state.user.basket.find(value => value.id === id)?.count);
  const dispatch = useAppDispatch();

  return (
    <>
      {!count ? (
        <Button $type='primary' onClick={() => dispatch(addOneToBasket(id))}>
          Купить
        </Button>
      ) : (
        <Wrapper>
          <BasketButton onClick={() => dispatch(removeOneFromBasket(id))}>
            <RiSubtractFill size={'2.2rem'} />
          </BasketButton>
          <Count>{count}</Count>
          <BasketButton onClick={() => dispatch(addOneToBasket(id))}>
            <RiAddFill size={'2.2rem'} />
          </BasketButton>
        </Wrapper>
      )}
    </>
  );
};

export default BasketTools;
