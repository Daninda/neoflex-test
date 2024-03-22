import { FC, HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { Wrapper } from './styled';

type Props = {
  children: ReactNode;
  to: string;
  target?: HTMLAttributeAnchorTarget;
};

const LinkButton: FC<Props> = ({ children, to, target }) => {
  return (
    <Wrapper target={target} to={to}>
      {children}
    </Wrapper>
  );
};

export default LinkButton;
