import styled from 'styled-components';
import { theme } from '../../styles';

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-size: ${theme.fontSize.normal};
  font-weight: ${theme.fontWeight.normal};
`;

export const Wrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-rows: 100% 100%;
  row-gap: 2rem;
  column-gap: 0;

  @media (${theme.media.medium}) {
    grid-template-columns: 1.5fr 1fr;
    column-gap: 2rem;
    row-gap: 0;
  }
`;
