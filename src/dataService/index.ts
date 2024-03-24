import testData from '../store/testData';
import { TProduct } from '../types';

class DataService {
  static getUserData() {
    const res: { basket: { id: number; count: number }[]; favorites: number[] } = {
      basket: [],
      favorites: [],
    };
    const basket = localStorage.getItem('basket');
    const favorites = localStorage.getItem('favorites');
    res.basket = basket ? JSON.parse(basket) : [];
    res.favorites = favorites ? JSON.parse(favorites) : [];
    return res;
  }

  static getProducts(): TProduct[] {
    return testData;
  }

  static getProductsByIds(list: number[]): TProduct[] {
    return testData.filter(item => list.includes(item.id));
  }
}

export default DataService;
