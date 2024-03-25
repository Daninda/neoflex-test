import testData from '../store/testData';
import { TProduct } from '../types';

class DataService {
  static getBasket(): { id: number; count: number }[] {
    const basket = localStorage.getItem('basket');
    return basket ? JSON.parse(basket) : [];
  }

  static getFavorites(): number[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  static getProducts(): TProduct[] {
    return testData;
  }

  static getProductsByIds(list: number[]): TProduct[] {
    return testData.filter(item => list.includes(item.id));
  }

  static setBasket(countList: { id: number; count: number }[]): void {
    localStorage.setItem('basket', JSON.stringify(countList));
  }

  static setFavorites(list: number[]): void {
    localStorage.setItem('favorites', JSON.stringify(list));
  }
}

export default DataService;
