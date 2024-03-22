import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 4rem;
  align-items: center;
`;

export const IconLink = styled(Link)`
  position: relative;
  fill: ${theme.color.tertiary};
  transition: opacity 100ms;
  height: 100%;

  &:hover {
    opacity: ${theme.opacity.primary};
  }
`;

export const Indicator = styled.div`
  display: flex;
  position: absolute;
  top: -0.75rem;
  right: -1rem;
  width: 20px;
  height: 20px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.color.accent};
  font-size: ${theme.fontSize.extraSmall};
  font-weight: ${theme.fontWeight.light};
  color: ${theme.color.secondary};
  align-items: center;
  justify-content: center;
`;
