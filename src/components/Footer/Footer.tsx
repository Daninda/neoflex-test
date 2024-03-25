import LinkButton from '@components/LinkButton';
import SwitchLangs from '@components/SwitchLangs';
import { paths } from '@routes/helpers';
import { FC } from 'react';
import { IoLogoVk } from 'react-icons/io5';
import { RiTelegramLine, RiWhatsappLine } from 'react-icons/ri';
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
        <SwitchLangs />
      </FlexContainer>
      <Socials>
        <LinkButton target='_blank' to='https://vk.com/daninda'>
          <IoLogoVk size={'3rem'} />
        </LinkButton>
        <LinkButton target='_blank' to='https://t.me/dan1nda'>
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
