import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.footer`
  background-color: ${theme.color.secondary};
  padding: 2rem;
  border-top-left-radius: ${theme.borderRadius.normal};
  border-top-right-radius: ${theme.borderRadius.normal};
  box-shadow: ${theme.shadow.primary};
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

export const Logo = styled.p`
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.bold};
  order: 0;
  width: 50%;

  @media (${theme.media.medium}) {
    width: auto;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  row-gap: 1rem;
  order: 1;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  column-gap: 1.8rem;
  order: 0;

  @media (${theme.media.medium}) {
    order: 2;
  }
`;

export const IconWrapper = styled.p`
  color: ${theme.color.tertiary};
`;
