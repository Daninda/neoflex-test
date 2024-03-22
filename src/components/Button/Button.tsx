import { FC, ReactNode } from 'react';
import { Wrapper } from './styled';

type Props = {
  children: ReactNode;
  $type?: 'primary' | 'secondary';
  onClick: () => void;
};

const Button: FC<Props> = ({ children, onClick, $type = 'primary' }) => {
  return (
    <Wrapper $type={$type} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;
