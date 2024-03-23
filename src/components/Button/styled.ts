import styled from 'styled-components';
import { theme } from '../../styles';

type StyledProps = {
  $type: 'primary' | 'secondary';
};

export const Wrapper = styled.button<StyledProps>`
  background-color: transparent;
  height: 3rem;
  border: none;
  cursor: pointer;
  font-size: ${({ $type }) => {
    switch ($type) {
      case 'primary':
        return theme.fontSize.small;
      case 'secondary':
        return theme.fontSize.extraSmall;
    }
  }};
  font-weight: ${({ $type }) => {
    switch ($type) {
      case 'primary':
        return theme.fontWeight.normal;
      case 'secondary':
        return theme.fontWeight.light;
    }
  }};
  transition: opacity 100ms;

  &:hover {
    opacity: ${theme.opacity.primary};
  }
`;
