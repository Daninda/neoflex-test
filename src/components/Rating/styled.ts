import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  font-size: ${theme.fontSize.small};
  color: ${theme.color.tertiary};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.color.accent};
  opacity: 0.6;
`;
