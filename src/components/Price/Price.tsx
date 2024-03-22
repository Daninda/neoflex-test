import { FC } from 'react';
import { IProduct } from '../../types';
import { PriceDiscounted, PriceRegular, PriceRegularIfDiscounted, Wrapper } from './styled';

type Props = Pick<IProduct, 'price' | 'discountedPrice'>;

const Price: FC<Props> = ({ price, discountedPrice }) => {
  return (
    <Wrapper>
      {discountedPrice ? (
        <>
          <PriceDiscounted>
            {Math.round(discountedPrice).toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              maximumFractionDigits: 0,
            })}
          </PriceDiscounted>
          <PriceRegularIfDiscounted>
            {Math.round(price).toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              maximumFractionDigits: 0,
            })}
          </PriceRegularIfDiscounted>
        </>
      ) : (
        <PriceRegular>
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
