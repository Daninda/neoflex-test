import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  color: ${theme.color.tertiary};

  & .active {
    color: ${theme.color.accent};
  }
`;
