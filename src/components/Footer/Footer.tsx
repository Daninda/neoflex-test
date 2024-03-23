import { FC } from 'react';
import { IoLogoVk } from 'react-icons/io5';
import { RiTelegramLine, RiWhatsappLine } from 'react-icons/ri';
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
        <LinkButton to='/'>
          <IoLogoVk size={'3rem'} />
        </LinkButton>
        <LinkButton to='/'>
          <RiTelegramLine size={'3rem'} />
        </LinkButton>
        <LinkButton to='/'>
          <RiWhatsappLine size={'3rem'} />
        </LinkButton>
      </Socials>
    </Wrapper>
  );
};

export default Footer;
