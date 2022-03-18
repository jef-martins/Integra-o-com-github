import { GithubApi } from './api/github.api';
import { GithubState } from './state/github.state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GithubFacade {

    public projetos$ = this.state.projetos;
    public user$ = this.state.user;

    constructor(
        private state: GithubState,
        private api: GithubApi
    ) { }

    getUser(user: string) {
        this.api.pesquisar(user).subscribe(res => {
            this.state.usersCollection = res;
            console.log(res)
        });
    }
}

// this.api.pesquisar(event).subscribe(res=>{
//       this.user = res;
//       console.log(res)
//     });

//     this.api.listar(event).subscribe(res=>{
//       this.respostas = res;
//       console.log(res)
//     })