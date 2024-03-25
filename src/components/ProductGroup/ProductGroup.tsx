import Product from '@components/Product';
import { TProductGroup } from '@types';
import { FC } from 'react';
import { GroupWrapper, Title, Wrapper } from './styled';

const ProductGroup: FC<TProductGroup> = ({ category, products }) => {
  return (
    <Wrapper>
      <Title>{category}</Title>
      <GroupWrapper>
        {products.map((product, index) => {
          return <Product key={index} {...product} />;
        })}
      </GroupWrapper>
    </Wrapper>
  );
};

export default ProductGroup;
