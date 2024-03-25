import { useAppDispatch } from '@hooks';
import { removeAllFromBasket } from '@store/slices/BasketSlice';
import { FC } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { Wrapper } from './styled';

interface IDeleteButtonProps {
  id: number;
}

const DeleteButton: FC<IDeleteButtonProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(removeAllFromBasket(id));
  }

  return (
    <Wrapper
      onClick={() => {
        handleClick();
      }}
    >
      <RiDeleteBin2Line size={'2.4rem'} />
    </Wrapper>
  );
};

export default DeleteButton;
