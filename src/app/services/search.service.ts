import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = environment.baseUrl;
  
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

  constructor(private http: HttpClient) { }

  getSearchData(searchQuery){
    let body=new URLSearchParams();
    body.set('searchQuery',searchQuery);
    let url=this.baseUrl+'/search';
    return this.http.post(url,body.toString(),this.httpOptions);
  }
}
