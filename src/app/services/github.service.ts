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

  getUser(username) {
    return this.http.get(`${environment.endPoint}/users/${username}`, {
      headers: this.httpHeaders,
    });
  }

  getUserRepos(username) {
    return this.http.get(`${environment.endPoint}/users/${username}/repos`, {
      headers: this.httpHeaders,
    });
  }

  getUserFollowers(username) {
    return this.http.get(
      `${environment.endPoint}/users/${username}/followers`,
      {
        headers: this.httpHeaders,
      }
    );
  }
}
