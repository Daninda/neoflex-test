import LinkButton from '@components/LinkButton';
import Price from '@components/Price';
import BasketTools from '@features/BasketTools';
import DeleteButton from '@features/DeleteButton';
import TotalProductPrice from '@features/TotalProductPrice';
import { paths } from '@routes/helpers';
import { TProduct } from '@types';
import { FC } from 'react';
import { BasketInfo, FlexContainer, Image, ImageWrapper, Info, Title, Wrapper } from './styled';

const BasketProduct: FC<TProduct> = ({ id, img, price, discountedPrice, title }) => {
  return (
    <Wrapper>
      <DeleteButton id={id} />
      <FlexContainer>
        <LinkButton to={paths.basket}>
          <ImageWrapper>
            <Image src={`/img/${img}`} />
          </ImageWrapper>
        </LinkButton>
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
