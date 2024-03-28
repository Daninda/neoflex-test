import styled from 'styled-components';
import { theme } from 'styles';

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  inset: 0 0 0 0;
  background-color: rgba(0, 0, 0, 20%);
  z-index: 100;
  justify-content: center;
  align-items: center;
`;

export const DetailsWrapper = styled.article`
  display: flex;
  padding: 2rem;
  position: relative;
  width: 80rem;
  margin: 0 2rem;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.color.secondary};
  border-radius: ${theme.borderRadius.normal};
  box-shadow: ${theme.shadow.primary};

  & > button {
    margin-top: -2rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;

  @media (${theme.media.medium}) {
    width: 25rem;
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 0;
  justify-content: center;
  font-size: ${theme.fontSize.extraSmall};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.tertiary};
  row-gap: 1.2rem;
  opacity: 1;

  @media (${theme.media.medium}) {
    margin-left: 3rem;
  }
`;

export const Title = styled.h3`
  font-size: ${theme.fontSize.small};
  font-weight: ${theme.fontWeight.light};
  color: ${theme.color.primary};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (${theme.media.medium}) {
    flex-direction: row;
  }
`;

export const BasketToolsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (${theme.media.medium}) {
    margin-top: 0;
    margin-right: 0;
    margin-left: auto;
    align-items: end;
    justify-content: right;
  }
`;

export const Details = styled.p`
  font-size: ${theme.fontSize.small};
  color: ${theme.color.tertiary};
  margin-top: 5rem;
  margin-bottom: 3rem;
  text-align: center;
`;
