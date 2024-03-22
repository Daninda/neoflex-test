import styled from 'styled-components';
import { theme } from '../../styles';

export const Icon = styled.div`
  fill: ${theme.color.accent};
  opacity: 0.6;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${theme.fontSize.small};
  color: ${theme.color.tertiary};
`;
