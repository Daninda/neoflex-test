import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
`;

export const Logo = styled(Link)`
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.bold};
  transition: opacity 100ms;

  &:hover {
    opacity: ${theme.opacity.primary};
  }
`;
