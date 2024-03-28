import Price from '@components/Price';
import BasketTools from '@features/BasketTools';
import LikeButton from '@features/LikeButton';
import { useAppDispatch, useAppSelector } from '@hooks';
import { setShownDetails } from '@store/slices/DetailsSlice';
import useClickOutside from 'hooks/useClickOutside';
import { FC, useRef } from 'react';
import {
  BasketToolsWrapper,
  Details,
  DetailsWrapper,
  FlexContainer,
  Image,
  ImageWrapper,
  Info,
  Title,
  Wrapper,
} from './styled';

const ProductDetails: FC = () => {
  const dispatch = useAppDispatch();
  const isShown = useAppSelector(state => state.details.isShown);
  const details = useAppSelector(state => state.details.product);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    dispatch(setShownDetails(false));
  });

  if (!details || !isShown) {
    return <></>;
  }

  return (
    <Wrapper>
      <DetailsWrapper ref={ref}>
        <LikeButton id={details.id} />
        <FlexContainer>
          <ImageWrapper>
            <Image src={`/img/${details.img}`} />
          </ImageWrapper>
          <Info>
            <Title>{details.title}</Title>
            <Price
              discountedPrice={details.discountedPrice}
              price={details.price}
              $variant='secondary'
            />
          </Info>
          <BasketToolsWrapper>
            <BasketTools id={details.id} />
          </BasketToolsWrapper>
        </FlexContainer>
        <Details>Информация о товаре</Details>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default ProductDetails;
