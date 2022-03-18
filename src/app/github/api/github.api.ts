import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubApi {

  url = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  pesquisar(user: string){
    const response = this.http.get(this.url + user);
    return response;
  }

  listar(user: string){
    const response = this.http.get(this.url + user + '/repos');
    return response;
  }

  getUrl(url: string){
    const response = this.http.get(url);
    return response;
  }
}

