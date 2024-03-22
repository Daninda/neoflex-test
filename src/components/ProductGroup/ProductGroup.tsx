import { FC } from 'react';
import { IProductGroup } from '../../types';
import Product from '../Product';
import { GroupWrapper, Title, Wrapper } from './styled';

const ProductGroup: FC<IProductGroup> = ({ title, products }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <GroupWrapper>
        {products.map((product, index) => {
          return <Product key={index} {...product} />;
        })}
      </GroupWrapper>
    </Wrapper>
  );
};

export default ProductGroup;
