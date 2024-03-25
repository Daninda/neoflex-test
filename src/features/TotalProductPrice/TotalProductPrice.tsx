import { useAppSelector } from '@hooks';
import { FC } from 'react';
import { TotalPriceWrapper } from './styled';

const TotalPrice: FC<{ id: number; discountedPrice?: number; price: number }> = ({
  id,
  discountedPrice,
  price,
}) => {
  const count = useAppSelector(state => state.basket.countList.find(item => item.id === id)?.count);

  return (
    <TotalPriceWrapper>
      {(discountedPrice ? discountedPrice * (count ?? 0) : price * (count ?? 0)).toLocaleString(
        'ru-RU',
        {
          style: 'currency',
          currency: 'RUB',
          maximumFractionDigits: 0,
        }
      )}
    </TotalPriceWrapper>
  );
};

export default TotalPrice;
