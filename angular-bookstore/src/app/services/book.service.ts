import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from '../common/book.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl ="http://localhost:8080/api/v1/books";
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
// we need to convert it to book array Book[]
    return this.http.get<GetResponseBooks>(this.baseUrl).pipe(
      map(response=>{
        //books array is inside the _embedded check the link in spring output
        return response._embedded.books;
    }));  
  }

}
// it is the type of response that we will get from spring rest data in json form 
  interface GetResponseBooks{
    _embedded:{
      books: Book[];
    }
  }



