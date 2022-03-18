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
        this.api.pesquisar(user).subscribe((res:any) => {
            this.state.usersCollection = res.avatar_url;
        });
    }

    getRepo(user: string) {
        this.api.listar(user).subscribe((res:any) => {
            this.state.projetosCollection = res;
        });
    }
}
