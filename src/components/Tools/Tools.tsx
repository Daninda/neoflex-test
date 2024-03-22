import { FC } from 'react';
import { Basket, Like } from '../../icons';
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
        <Like />
      </IconLink>
      <IconLink to={paths.basket}>
        {basketCount ? <Indicator>{basketCount}</Indicator> : null}
        <Basket />
      </IconLink>
    </Wrapper>
  );
};

export default Tools;
