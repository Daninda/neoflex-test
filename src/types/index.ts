export interface IProduct {
  img: string;
  title: string;
  price: number;
  discountedPrice?: number;
  rate: number;
}

export interface IProductGroup {
  title: string;
  products: IProduct[];
}

export type TData = IProductGroup[];
