import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../model/ibook';

const API_URL = 'http://localhost:3000/books'
@Injectable({
  providedIn: 'root'
})
export class BookService {
  

  constructor(private httpClient:HttpClient) { }

  showAllBook():Observable<any>{
    return this.httpClient.get<any>(API_URL);
  };

  createBook(book : IBook):Observable<any>{
    return this.httpClient.post<any>(API_URL,book);

  };

  editBook(id:any, book:IBook):Observable<any>{
    return this.httpClient.put<any>(API_URL + `/${id}`,book);
  };

  findBookById(id:any):Observable<any>{
    return this.httpClient.get<any>(API_URL + `/${id}`);
  };

  deleteBook(id:any):Observable<any>{
    return this.httpClient.delete<any>(API_URL+ `/${id}`);
  };
}
