import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: fit-content;
  color: ${theme.color.danger};
  transition: opacity 100ms, transform 50ms;

  &:hover {
    opacity: ${theme.opacity.primary};
  }

  &:active {
    transform: scale(1.1);
  }
`;
