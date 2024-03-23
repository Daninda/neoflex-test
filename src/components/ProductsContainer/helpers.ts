import { TProduct, TProductGroup } from '../../types';

export const divideByGroups = (products: TProduct[]): TProductGroup[] => {
  const res: TProductGroup[] = [];
  const categories = Array.from(new Set(products.map(product => product.category)));

  categories.forEach(category => {
    res.push({
      products: products.filter(product => product.category == category),
      category: category,
    });
  });

  return res;
};
