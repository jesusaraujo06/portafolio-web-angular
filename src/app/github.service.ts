import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly url = 'https://api.github.com/users/jesusaraujo06/repos?type=owner';
  
  constructor(private httpClient: HttpClient) {

  }

  loadRepos = () => this.httpClient.get(this.url);
  
}
