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
    public branchs$ = this.state.branchs;
    public user$ = this.state.user;
    public carregando = false;
    public url = '';
    public url1 = '';
    public url2 = '';


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

                    const branchs: any = await lastValueFrom(this.api.getUrl('https://api.github.com/repos/' + user + '/' + item.name + '/git/refs'));

                    this.url = "https://github.com/" + item.owner.login + "/";
                    
                    this.state.projetosCollection.push({
                        ...item,
                        download_url_adpted: branchs
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

    // getBranch(){
    //     const branchs: any = await lastValueFrom(this.api.getUrl('https://api.github.com/repos/' + user + '/' + item.name + '/git/refs'));

    // }

}

