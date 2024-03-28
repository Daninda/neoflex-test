import Price from '@components/Price';
import Rating from '@components/Rating';
import BasketTools from '@features/BasketTools';
import LikeButton from '@features/LikeButton';
import { useAppDispatch } from '@hooks';
import { fetchDetails, setShownDetails } from '@store/slices/DetailsSlice';
import { TProduct } from '@types';
import { FC, memo } from 'react';
import { FlexContainer, Image, ImageWrapper, Info, Title, Wrapper } from './styled';

const Product: FC<TProduct> = memo(({ id, img, title, price, discountedPrice, rate }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Wrapper>
        <LikeButton id={id} />
        <ImageWrapper
          onClick={() => {
            dispatch(fetchDetails(id));
            dispatch(setShownDetails(true));
          }}
        >
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
        </Info>
      </Wrapper>
    </>
  );
});

export default Product;
