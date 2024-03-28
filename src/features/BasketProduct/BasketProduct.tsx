import Price from '@components/Price';
import BasketTools from '@features/BasketTools';
import DeleteButton from '@features/DeleteButton';
import TotalProductPrice from '@features/TotalProductPrice';
import { useAppDispatch } from '@hooks';
import { fetchDetails, setShownDetails } from '@store/slices/DetailsSlice';
import { TProduct } from '@types';
import { FC } from 'react';
import { BasketInfo, FlexContainer, Image, ImageWrapper, Info, Title, Wrapper } from './styled';

const BasketProduct: FC<TProduct> = ({ id, img, price, discountedPrice, title }) => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <DeleteButton id={id} />
      <FlexContainer>
        <ImageWrapper
          onClick={() => {
            dispatch(fetchDetails(id));
            dispatch(setShownDetails(true));
          }}
        >
          <Image src={`/img/${img}`} />
        </ImageWrapper>
        <Info>
          <Title>{title}</Title>
          <Price {...{ price, discountedPrice }} $variant='secondary' />
        </Info>
      </FlexContainer>
      <BasketInfo>
        <BasketTools id={id} />
        <TotalProductPrice discountedPrice={discountedPrice} id={id} price={price} />
      </BasketInfo>
    </Wrapper>
  );
};

export default BasketProduct;
