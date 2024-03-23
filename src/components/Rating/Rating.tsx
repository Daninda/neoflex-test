import { FC } from 'react';
import { RiStarFill } from 'react-icons/ri';
import { IconWrapper, Wrapper } from './styled';

type Props = {
  rate: number;
};

const Rating: FC<Props> = ({ rate }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <RiStarFill size={'2.4rem'} />
      </IconWrapper>
      {rate}
    </Wrapper>
  );
};

export default Rating;
