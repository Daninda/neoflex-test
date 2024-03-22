import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.footer`
  background-color: ${theme.color.secondary};
  padding: 3rem;
  border-top-left-radius: ${theme.borderRadius.normal};
  border-top-right-radius: ${theme.borderRadius.normal};
  box-shadow: ${theme.shadow.primary};
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.p`
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.bold};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  row-gap: 1rem;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  column-gap: 2rem;
`;
