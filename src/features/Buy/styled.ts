import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const Block = styled.div`
  background-color: ${theme.color.secondary};
  border-radius: ${theme.borderRadius.normal};
  box-shadow: ${theme.shadow.primary};
  width: 100%;
  height: min-content;

  @media (${theme.media.medium}) {
    max-width: 35rem;
  }
`;

export const Total = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: ${theme.fontSize.extraSmall};
`;
