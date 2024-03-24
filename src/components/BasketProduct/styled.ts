import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles';

export const Wrapper = styled.article`
  display: flex;
  padding: 1.5rem 2rem;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.color.secondary};
  border-radius: ${theme.borderRadius.normal};
  box-shadow: ${theme.shadow.primary};
`;

export const ImageWrapper = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 15rem;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 3rem;
  font-size: ${theme.fontSize.extraSmall};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.tertiary};
  row-gap: 1.2rem;
  opacity: 1;
`;

export const Title = styled.h3`
  font-size: ${theme.fontSize.small};
  font-weight: ${theme.fontWeight.light};
  color: ${theme.color.primary};
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const BasketInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem 0;
`;

export const TotalPrice = styled.p`
  display: flex;
  font-size: ${theme.fontSize.extraSmall};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.primary};
  align-items: center;
`;
