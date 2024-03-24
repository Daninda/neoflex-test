import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  column-gap: 2rem;
  font-size: ${theme.fontSize.small};
`;

export const BasketButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  height: 3rem;
  width: 3rem;
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.color.accent};
  color: ${theme.color.secondary};
  opacity: 0.6;
  transition: opacity 100ms;

  &:hover {
    opacity: ${theme.opacity.primary};
  }
`;

export const Count = styled.p`
  display: flex;
  justify-content: center;
  min-width: 2.4rem;
`;
