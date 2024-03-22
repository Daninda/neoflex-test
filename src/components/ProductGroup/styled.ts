import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.section`
  width: 100%;
  margin: 3rem 0;
`;

export const Title = styled.h2`
  font-size: ${theme.fontSize.normal};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.tertiary};
  margin-bottom: 2rem;
`;

export const GroupWrapper = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;

  @media (${theme.media.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (${theme.media.large}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
