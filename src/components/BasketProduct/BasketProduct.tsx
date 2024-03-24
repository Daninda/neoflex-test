import { FC } from 'react';
import BasketTools from '../../features/BasketTools';
import { useAppSelector } from '../../hooks';
import { paths } from '../../routes/helpers';
import { TProduct } from '../../types';
import Price from '../Price';
import {
  BasketInfo,
  FlexContainer,
  Image,
  ImageWrapper,
  Info,
  Title,
  TotalPrice,
  Wrapper,
} from './styled';

const BasketProduct: FC<TProduct> = ({ id, img, price, discountedPrice, title }) => {
  const count = useAppSelector(state => state.user.basket).find(item => item.id === id)?.count;

  return (
    <Wrapper>
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
        <TotalPrice>
          {(discountedPrice ? discountedPrice * (count ?? 0) : price * (count ?? 0)).toLocaleString(
            'ru-RU',
            {
              style: 'currency',
              currency: 'RUB',
              maximumFractionDigits: 0,
            }
          )}
        </TotalPrice>
      </BasketInfo>
    </Wrapper>
  );
};

export default BasketProduct;
