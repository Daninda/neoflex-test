import ProductGroup from '@components/ProductGroup';
import ProductDetails from '@features/ProductDetails';
import { useAppDispatch, useAppSelector } from '@hooks';
import { fetchProducts } from '@store/slices/ProductsSlice';
import { FC, useEffect, useMemo } from 'react';
import { divideByGroups } from './helpers';

const ProductsContainer: FC = () => {
  const products = useAppSelector(state => state.products.list);
  const productGroups = useMemo(() => divideByGroups(products), [products]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <ProductDetails />
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
