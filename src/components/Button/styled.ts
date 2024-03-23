import styled from 'styled-components';
import { theme } from '../../styles';

type StyledProps = {
  $type: 'primary' | 'secondary';
  $isActive: boolean;
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

  color: ${({ $isActive }) => ($isActive ? theme.color.accent : theme.color.primary)};

  transition: opacity 100ms, color 100ms;

  &:hover {
    opacity: ${theme.opacity.primary};
  }
`;
