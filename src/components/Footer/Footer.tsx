import { FC } from 'react';
import { paths } from '../../routes/helpers';
import LinkButton from '../LinkButton';
import SwithLangs from '../SwithLangs';
import { FlexContainer, Logo, Socials, Wrapper } from './styled';

const Footer: FC = () => {
  return (
    <Wrapper>
      <Logo>QPICK</Logo>
      <FlexContainer>
        <LinkButton to='/'>Избранное</LinkButton>
        <LinkButton to={paths.basket}>Корзина</LinkButton>
        <LinkButton target='_blank' to='https://github.com/Daninda'>
          Контакты
        </LinkButton>
      </FlexContainer>
      <FlexContainer>
        <LinkButton to='/'>Условия сервиса</LinkButton>
        <SwithLangs />
      </FlexContainer>
      <Socials>
        <LinkButton to='/'>+</LinkButton>
        <LinkButton to='/'>+</LinkButton>
        <LinkButton to='/'>+</LinkButton>
      </Socials>
    </Wrapper>
  );
};

export default Footer;
