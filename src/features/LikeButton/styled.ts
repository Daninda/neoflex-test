import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 2rem;
  width: fit-content;
  color: ${theme.color.danger};
  transition: opacity 100ms, transform 50ms;
  z-index: 10;

  &:hover {
    opacity: ${theme.opacity.primary};
  }

  &:active {
    transform: scale(1.1);
  }
`;
