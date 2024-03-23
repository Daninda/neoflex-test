import { FC, useMemo } from 'react';
import { useAppSelector } from '../../hooks';
import ProductGroup from '../ProductGroup';
import { divideByGroups } from './helpers';

const ProductsContainer: FC = () => {
  const products = useAppSelector(state => state.products.list);

  const productGroups = useMemo(() => divideByGroups(products), [products]);

  return (
    <>
      {productGroups.map((productGroup, index) => {
        return (
          <ProductGroup
            key={index}
            category={productGroup.category}
            products={productGroup.products}
          />
        );
      })}
    </>
  );
};

export default ProductsContainer;
