import { FC, memo } from 'react';
import BasketTools from '../../features/BasketTools';
import LikeButton from '../../features/LikeButton';
import { paths } from '../../routes/helpers';
import { TProduct } from '../../types';
import Price from '../Price';
import Rating from '../Rating';
import { FlexContainer, Image, ImageWrapper, Info, Title, Wrapper } from './styled';

const Product: FC<TProduct> = memo(({ id, img, title, price, discountedPrice, rate }) => {
  return (
    <Wrapper>
      <LikeButton id={id} />
      <ImageWrapper to={paths.details}>
        <Image src={`/img/${img}`} />
      </ImageWrapper>
      <Info>
        <FlexContainer>
          <Title>{title}</Title>
          <Price {...{ price, discountedPrice }} />
        </FlexContainer>
        <FlexContainer>
          <Rating rate={rate} />
          <BasketTools id={id} />
        </FlexContainer>
      </Info>{' '}
    </Wrapper>
  );
});

export default Product;
