import { FC } from 'react';
import { RiHeartLine, RiShoppingCart2Line } from 'react-icons/ri';
import { paths } from '../../routes/helpers';
import { IconLink, Indicator, Wrapper } from './styled';

type Props = {
  likeCount: number;
  basketCount: number;
};

const Tools: FC<Props> = ({ likeCount, basketCount }) => {
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
