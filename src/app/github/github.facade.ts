import { GithubApi } from './api/github.api';
import { GithubState } from './state/github.state';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GithubFacade {

    public projetos$ = this.state.projetos;
    public user$ = this.state.user;
    public carregando = false;

    constructor(
        private state: GithubState,
        private api: GithubApi
    ) { }

    getUser(user: string) {
        this.api.pesquisar(user).subscribe((res: any) => {
            this.carregando = true;
            this.state.usersCollection = res.avatar_url;
        });
    }

    getRepo(user: string) {
        this.api.listar(user).subscribe(async (itens: any) => {
            
            this.state.projetosCollection = await this.getSha(itens);

            this.podeBaixar();
        });
    }

    podeBaixar(){
        setTimeout(() => {
            window.scrollTo({ top: 650, behavior: 'smooth' });
            this.carregando = false;
        }, 1000);
    }

    async getSha(itens: any){
        let itensAdapted: any = [];

        for await (let item of itens) {
            const [commit] = item.commits_url.split("{");

            try {
                const sha: any = await lastValueFrom(this.api.getUrl(commit));
                const url = "https://github.com/" + item.owner.login + "/" + item.name + "/archive/" + sha[0].sha + ".zip"
                itensAdapted.push({
                    ...item,
                    download_url_adpted: url
                });

            } catch (e) {
                console.log(e);
            }
        }

        return itensAdapted;
    }
}
