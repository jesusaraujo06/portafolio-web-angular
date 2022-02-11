import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly url = 'https://api.github.com/users/jesusaraujo06/repos';
  
  constructor(private httpClient: HttpClient) { 
  }

  // httpHeaders = new HttpHeaders()
  //   .set('Authorization', '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')
  //   .set('Access-Control-Allow-Origin', '*')
  //   .set('Access-Control-Allow-Headers', 'X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Request-Method')
  //   .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');

  loadRepos = () => this.httpClient.get(this.url);
  
}
