import { FC, useEffect } from 'react';
import { RiHeartLine, RiShoppingCart2Line } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { paths } from '../../routes/helpers';
import { fetchBasketCountList } from '../../store/slices/BasketSlice';
import { fetchFavorites } from '../../store/slices/FavoritesSlice';
import { IconLink, Indicator, Wrapper } from './styled';

const Tools: FC = () => {
  const basketCount = useAppSelector(state => state.basket.countList.length);
  const likeCount = useAppSelector(state => state.favorites.list.length);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
    dispatch(fetchBasketCountList());
  }, [dispatch]);

  return (
    <Wrapper>
      <IconLink to={paths.home}>
        {likeCount ? <Indicator>{likeCount}</Indicator> : null}
        <RiHeartLine size={'2.4rem'} />
      </IconLink>
      <IconLink to={paths.basket}>
        {basketCount ? <Indicator>{basketCount}</Indicator> : null}
        <RiShoppingCart2Line size={'2.4rem'} />
      </IconLink>
    </Wrapper>
  );
};

export default Tools;
