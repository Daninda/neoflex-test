export type TProduct = {
  id: number;
  category: string;
  img: string;
  title: string;
  price: number;
  discountedPrice?: number;
  rate: number;
};

export type TProductGroup = {
  category: string;
  products: TProduct[];
};
