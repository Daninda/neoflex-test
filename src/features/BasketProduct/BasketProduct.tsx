import Price from '@components/Price';
import BasketTools from '@features/BasketTools';
import DeleteButton from '@features/DeleteButton';
import { useAppSelector } from '@hooks';
import { paths } from '@routes/helpers';
import { TProduct } from '@types';
import { FC } from 'react';
import {
  BasketInfo,
  FlexContainer,
  Image,
  ImageWrapper,
  Info,
  Title,
  TotalPriceWrapper,
  Wrapper,
} from './styled';

const BasketProduct: FC<TProduct> = ({ id, img, price, discountedPrice, title }) => {
  return (
    <Wrapper>
      <DeleteButton id={id} />
      <FlexContainer>
        <ImageWrapper to={paths.details}>
          <Image src={`/img/${img}`} />
        </ImageWrapper>
        <Info>
          <Title>{title}</Title>
          <Price {...{ price, discountedPrice }} $variant='secondary' />
        </Info>
      </FlexContainer>
      <BasketInfo>
        <BasketTools id={id} />
        <TotalPrice discountedPrice={discountedPrice} id={id} price={price} />
      </BasketInfo>
    </Wrapper>
  );
};

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

export default BasketProduct;
