import { FC } from 'react';
import testData from '../../testData';
import { TData } from '../../types';
import ProductGroup from '../ProductGroup';

const ProductsContainer: FC = () => {
  let productGroups: TData = testData;

  return (
    <>
      {productGroups.map((productGroup, index) => {
        return (
          <ProductGroup key={index} title={productGroup.title} products={productGroup.products} />
        );
      })}
    </>
  );
};

export default ProductsContainer;
