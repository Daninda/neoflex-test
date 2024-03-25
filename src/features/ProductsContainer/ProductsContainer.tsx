import { FC, useEffect, useMemo } from 'react';
import ProductGroup from '../../components/ProductGroup';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchProducts } from '../../store/slices/ProductsSlice';
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
