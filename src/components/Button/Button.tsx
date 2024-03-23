import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Wrapper } from './styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  $isActive?: boolean;
  $type?: 'primary' | 'secondary';
  onClick: () => void;
}

const Button: FC<Props> = ({ children, onClick, $type = 'primary', $isActive = false }) => {
  return (
    <Wrapper $isActive={$isActive} $type={$type} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;
