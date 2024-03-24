import { FC } from 'react';
import Tools from '../../features/HeaderTools';
import { paths } from '../../routes/helpers';
import { Logo, Wrapper } from './styled';

const Header: FC = () => {
  return (
    <Wrapper>
      <Logo to={paths.home}>QPICK</Logo>
      <Tools />
    </Wrapper>
  );
};

export default Header;
