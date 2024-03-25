import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled(Link)`
  cursor: pointer;
  font-size: ${theme.fontSize.small};
  font-weight: ${theme.fontWeight.extraLight};
  transition: opacity 100ms;
  height: 100%;

  &:hover {
    opacity: ${theme.opacity.primary};
  }
`;
