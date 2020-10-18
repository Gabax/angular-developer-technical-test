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

  searchUsers(value: string) {
    let params = new HttpParams();
    params = params.append('q', value);

    return this.http.get(`${environment.endPoint}/search/users`, {
      headers: this.httpHeaders,
      params: params,
    });
  }

  getUsers() {
    return this.http.get(`${environment.endPoint}/users`, {
      headers: this.httpHeaders,
    });
  }

  getUser(username) {
    return this.http.get(`${environment.endPoint}/users/${username}`, {
      headers: this.httpHeaders,
    });
  }
}
