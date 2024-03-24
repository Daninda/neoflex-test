import { FC } from 'react';
import { PriceDiscounted, PriceRegular, PriceRegularIfDiscounted, Wrapper } from './styled';

type Props = {
  price: number;
  discountedPrice?: number;
  $variant?: 'primary' | 'secondary';
};

const Price: FC<Props> = ({ price, discountedPrice, $variant = 'primary' }) => {
  return (
    <Wrapper $variant={$variant}>
      {discountedPrice ? (
        <>
          <PriceDiscounted $variant={$variant}>
            {Math.round(discountedPrice).toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              maximumFractionDigits: 0,
            })}
          </PriceDiscounted>
          <PriceRegularIfDiscounted $variant={$variant}>
            {Math.round(price).toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              maximumFractionDigits: 0,
            })}
          </PriceRegularIfDiscounted>
        </>
      ) : (
        <PriceRegular $variant={$variant}>
          {Math.round(price).toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            maximumFractionDigits: 0,
          })}
        </PriceRegular>
      )}
    </Wrapper>
  );
};

export default Price;
