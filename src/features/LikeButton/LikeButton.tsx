import { useAppDispatch, useAppSelector } from '@hooks';
import { addToFavorites, removeFromFavorites } from '@store/slices/FavoritesSlice';
import { FC } from 'react';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { Wrapper } from './styled';

interface ILikeButtonProps {
  id: number;
}

const LikeButton: FC<ILikeButtonProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const isLiked = useAppSelector(state => state.favorites.list.includes(id));

  function handleClick() {
    isLiked ? dispatch(removeFromFavorites(id)) : dispatch(addToFavorites(id));
  }

  return (
    <Wrapper
      onClick={() => {
        handleClick();
      }}
    >
      {isLiked ? <RiHeartFill size={'2.4rem'} /> : <RiHeartLine size={'2.4rem'} />}
    </Wrapper>
  );
};

export default LikeButton;
