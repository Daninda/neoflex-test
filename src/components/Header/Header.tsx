import { FC } from 'react';
import { paths } from '../../routes/helpers';
import Tools from '../Tools';
import { Logo, Wrapper } from './styled';

const Header: FC = () => {
  return (
    <Wrapper>
      <Logo to={paths.home}>QPICK</Logo>
      <Tools likeCount={19} basketCount={3} />
    </Wrapper>
  );
};

export default Header;
