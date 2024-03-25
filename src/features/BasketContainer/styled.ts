import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  color: ${theme.color.tertiary};
  font-size: ${theme.fontSize.small};
`;
