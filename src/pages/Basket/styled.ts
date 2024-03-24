import styled from 'styled-components';
import { theme } from '../../styles';

export const Title = styled.h1`
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-size: ${theme.fontSize.normal};
  font-weight: ${theme.fontWeight.normal};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
`;
