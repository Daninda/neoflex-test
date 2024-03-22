import { FC } from 'react';
import { Rate } from '../../icons';
import { Icon, Wrapper } from './styled';

type Props = {
  rate: number;
};

const Rating: FC<Props> = ({ rate }) => {
  return (
    <Wrapper>
      <Icon>
        <Rate />
      </Icon>
      {rate}
    </Wrapper>
  );
};

export default Rating;
