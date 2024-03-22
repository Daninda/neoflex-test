import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  position: relative;
`;

export const PriceRegular = styled.p`
  color: ${theme.color.accent};
  font-size: ${theme.fontSize.small};
`;

export const PriceDiscounted = styled.p`
  color: ${theme.color.accent};
  font-size: ${theme.fontSize.small};
`;

export const PriceRegularIfDiscounted = styled.p`
  position: absolute;
  bottom: -1.3rem;
  color: ${theme.color.accent};
  opacity: 0.6;
  text-decoration: line-through;
  font-size: 1.3rem;
  width: 100%;
  text-align: center;
`;
