import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

  constructor(private http: HttpClient) { }

  getSearchData(searchQuery){
    let body=new URLSearchParams();
    body.set('searchQuery',searchQuery);
    return this.http.post('http://localhost:3001/search',body.toString(),this.httpOptions);
  }
}
