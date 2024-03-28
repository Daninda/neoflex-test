import styled from 'styled-components';
import { theme } from '../../styles';

type StyledProps = {
  $type: 'primary' | 'secondary' | 'tertiary';
  $isActive: boolean;
  $disabled: boolean;
};

export const Wrapper = styled.button<StyledProps>`
  height: ${({ $type }) => {
    switch ($type) {
      case 'primary':
      case 'secondary':
        return '3rem';
      case 'tertiary':
        return '6.5rem';
    }
  }};
  width: ${({ $type }) => {
    switch ($type) {
      case 'primary':
      case 'secondary':
        return 'auto';
      case 'tertiary':
        return '100%';
    }
  }};
  border-radius: ${({ $type }) => {
    switch ($type) {
      case 'primary':
      case 'secondary':
        return '0';
      case 'tertiary':
        return theme.borderRadius.light;
    }
  }};
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  font-size: ${({ $type }) => {
    switch ($type) {
      case 'primary':
      case 'tertiary':
        return theme.fontSize.small;
      case 'secondary':
        return theme.fontSize.extraSmall;
    }
  }};
  font-weight: ${({ $type }) => {
    switch ($type) {
      case 'primary':
      case 'tertiary':
        return theme.fontWeight.normal;
      case 'secondary':
        return theme.fontWeight.light;
    }
  }};

  color: ${({ $type, $isActive }) => {
    switch ($type) {
      case 'primary':
      case 'secondary':
        return $isActive ? theme.color.accent : theme.color.primary;
      case 'tertiary':
        return theme.color.secondary;
    }
  }};

  background-color: ${({ $type }) => {
    switch ($type) {
      case 'primary':
      case 'secondary':
        return 'transparent';
      case 'tertiary':
        return theme.color.primary;
    }
  }};

  transition: opacity 100ms, color 100ms;

  &:hover {
    opacity: ${theme.opacity.primary};
  }
`;
