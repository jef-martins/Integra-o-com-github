import { GithubApi } from './api/github.api';
import { GithubState } from './state/github.state';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { fil } from 'date-fns/locale';

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
            this.state.userCollection = res;

        });
    }


    getRepo(user: string, pagina: number) {
        this.api.listar(user, pagina).subscribe(async (res: any) => {

            this.state.projetosCollection = [];
            try {
                for await (let item of res) {

                    const [commit] = item.commits_url.split("{");
                    
                    const sha: any = await lastValueFrom(this.api.getUrl(commit));
                    const teste: any = await lastValueFrom(this.api.getUrl('https://api.github.com/repos/jef-martins/agenda-backEnd/git/refs'));
                    console.log(teste)
                    const url = "https://github.com/" + item.owner.login + "/" + item.name + "/archive/" + sha[0].sha + ".zip"
                    //console.log(url)
                    this.state.projetosCollection.push({
                        ...item,
                        download_url_adpted: url
                    });
                   
                    setTimeout(() => {
                        window.scrollTo({ top: 620, behavior: 'smooth' });
                        this.carregando = false;
                    }, 2000);
                };
            } catch (erro) {
                console.log(erro)
            }

        });

    }

}

