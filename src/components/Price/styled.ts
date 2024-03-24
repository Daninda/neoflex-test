import styled from 'styled-components';
import { theme } from '../../styles';

type StyledProps = {
  $variant: 'primary' | 'secondary';
};

export const Wrapper = styled.div<StyledProps>`
  position: relative;
  opacity: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return 1;
      case 'secondary':
        return 0.7;
    }
  }};
`;

export const PriceRegular = styled.p<StyledProps>`
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return theme.color.accent;
      case 'secondary':
        return theme.color.tertiary;
    }
  }};
  font-size: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return theme.fontSize.small;
      case 'secondary':
        return theme.fontSize.extraSmall;
    }
  }};
`;

export const PriceDiscounted = styled.p<StyledProps>`
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return theme.color.accent;
      case 'secondary':
        return theme.color.tertiary;
    }
  }};
  font-size: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return theme.fontSize.small;
      case 'secondary':
        return theme.fontSize.extraSmall;
    }
  }};
`;

export const PriceRegularIfDiscounted = styled.p<StyledProps>`
  position: absolute;
  bottom: -1.3rem;
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return theme.color.accent;
      case 'secondary':
        return theme.color.tertiary;
    }
  }};
  opacity: 0.6;
  text-decoration: line-through;
  font-size: 1.3rem;
  width: 100%;
  text-align: center;
`;
