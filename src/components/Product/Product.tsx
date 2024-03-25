import LinkButton from '@components/LinkButton';
import Price from '@components/Price';
import Rating from '@components/Rating';
import BasketTools from '@features/BasketTools';
import LikeButton from '@features/LikeButton';
import { TProduct } from '@types';
import { FC, memo } from 'react';
import { FlexContainer, Image, ImageWrapper, Info, Title, Wrapper } from './styled';

const Product: FC<TProduct> = memo(({ id, img, title, price, discountedPrice, rate }) => {
  return (
    <Wrapper>
      <LikeButton id={id} />
      <LinkButton to='/'>
        <ImageWrapper>
          <Image src={`/img/${img}`} />
        </ImageWrapper>
      </LinkButton>
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
