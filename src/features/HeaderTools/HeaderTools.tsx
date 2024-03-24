import { FC } from 'react';
import { RiHeartLine, RiShoppingCart2Line } from 'react-icons/ri';
import { useAppSelector } from '../../hooks';
import { paths } from '../../routes/helpers';
import { IconLink, Indicator, Wrapper } from './styled';

const Tools: FC = () => {
  const basketCount = useAppSelector(state => state.user.basket.length);
  const likeCount = useAppSelector(state => state.user.favorites.length);

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
