import { FC } from 'react';
import { paths } from '../../routes/helpers';
import { TProduct } from '../../types';
import Button from '../Button';
import LikeButton from '../LikeButton';
import Price from '../Price';
import Rating from '../Rating';
import { FlexContainer, Image, ImageWrapper, Info, Title, Wrapper } from './styled';

const Product: FC<TProduct> = ({ id, img, title, price, discountedPrice, rate }) => {
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
          <Button $type='primary' onClick={() => {}}>
            Купить
          </Button>
        </FlexContainer>
      </Info>
    </Wrapper>
  );
};

export default Product;
