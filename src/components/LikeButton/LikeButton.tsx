import { FC, useState } from 'react';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { Wrapper } from './styled';

interface ILikeButtonProps {
  id: number;
}

const LikeButton: FC<ILikeButtonProps> = () => {
  const [isLiked, setLiked] = useState(false);

  return (
    <Wrapper onClick={() => setLiked(!isLiked)}>
      {isLiked ? <RiHeartFill size={'2.4rem'} /> : <RiHeartLine size={'2.4rem'} />}
    </Wrapper>
  );
};

export default LikeButton;
