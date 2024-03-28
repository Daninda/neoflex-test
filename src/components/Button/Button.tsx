import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Wrapper } from './styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  $isActive?: boolean;
  $disabled?: boolean;
  $type?: 'primary' | 'secondary' | 'tertiary';
  onClick: () => void;
}

const Button: FC<Props> = ({
  children,
  onClick,
  $type = 'primary',
  $isActive = false,
  $disabled = false,
}) => {
  return (
    <Wrapper
      $disabled={$disabled}
      $isActive={$isActive}
      $type={$type}
      onClick={!$disabled ? onClick : () => {}}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
