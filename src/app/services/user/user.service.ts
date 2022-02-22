import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  appId: string = '6214259b0fba49453cf9726a';

  baseURL: string = 'https://dummyapi.io/data/v1';

  constructor(
    private _http: HttpClient,
  ) { }

  getUsers(): Observable<any> {
    let headers = new HttpHeaders().set('app-id', this.appId);

    return this._http.get(this.baseURL + '/user', {
      headers: headers
    });

  }
}
