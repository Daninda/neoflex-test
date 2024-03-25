import testData from '../store/testData';
import { TProduct } from '../types';

class DataService {
  static getBasket(): { id: number; count: number }[] {
    const basket = sessionStorage.getItem('basket');
    return basket ? JSON.parse(basket) : [];
  }

  static getFavorites(): number[] {
    const favorites = sessionStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  static getProducts(): TProduct[] {
    return testData;
  }

  static getProductsByIds(list: number[]): TProduct[] {
    return testData.filter(item => list.includes(item.id));
  }

  static getProduct(id: number): TProduct | undefined {
    return testData.find(item => item.id === id);
  }

  static setBasket(countList: { id: number; count: number }[]): void {
    sessionStorage.setItem('basket', JSON.stringify(countList));
  }

  static setFavorites(list: number[]): void {
    sessionStorage.setItem('favorites', JSON.stringify(list));
  }
}

export default DataService;
