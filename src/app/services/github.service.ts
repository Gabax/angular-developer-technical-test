import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  httpHeaders: HttpHeaders = new HttpHeaders({
    accept: 'application/vnd.github.v3+json',
  });

  constructor(private http: HttpClient) {}

  searchUser(value: string) {
    let params = new HttpParams();
    params = params.append('q', value);

    return this.http.get(`${environment.endPoint}/search/users`, {
      headers: this.httpHeaders,
      params: params,
    });
  }

  searchUsers() {
    return this.http.get(`${environment.endPoint}/users`, {
      headers: this.httpHeaders,
    });
  }
}
