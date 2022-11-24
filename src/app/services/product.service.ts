import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { CategoryModel } from '../models/category.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');

  }
  create(product: Omit<ProductModel, 'id'>): Observable<ProductModel> {
    return this._httpClient.post<ProductModel>('https://fakestoreapi.com/products', product);
  }
}
@Injectable()
export class CategorysService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<CategoryModel[]> {
    return this._httpClient.get<CategoryModel[]>('https://fakestoreapi.com/products/categories');
  }
  create(category: CategoryModel): Observable<CategoryModel>{
    return this._httpClient.post<CategoryModel>('https://fakestoreapi.com/products/categories', category);
  }
}
