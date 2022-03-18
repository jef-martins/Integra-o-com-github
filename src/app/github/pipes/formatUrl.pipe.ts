import { Component, Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { lastValueFrom } from 'rxjs';
import { GithubApi } from '../api/github.api';

@Pipe({
    name: 'formatUrlPipe'
})

export class FormatUrlPipe implements PipeTransform {

    private url = '';
    private sha: any = undefined;

    constructor(public api: GithubApi) { }

    transform(stringona: string) {
        const stringuinha = stringona.split('+');
        const url = this.prepararDownload(stringuinha[0], stringuinha[1], stringuinha[2])
        console.log(url)
        return url;
    }

    formatarUrl(commitUrl: string) {
        const commit = commitUrl.split("{");
        return commit[0];
    }

    // funcao1(stringuinha: string[]){
    //     const url = this.prepararDownload(stringuinha[0], stringuinha[1], stringuinha[2]).then(res=>{
    //         this.url = res;
    //         return res;
    //     });
    //     return url;
    // }

    prepararDownload(user: string, projeto: string, commitUrl: string) {
        // const sha: any = await lastValueFrom(this.service.getUrl(this.formatarUrl(commitUrl)));
        // return "https://github.com/" + user + "/" + projeto + "/archive/" + sha[0].sha + ".zip"
        const urlFormatada = this.formatarUrl(commitUrl);
        this.api.getUrl(urlFormatada).subscribe((res:any)=>{
            this.sha = res[0];
            
            if(this.sha){
                this.url = "https://github.com/" + user + "/" + projeto + "/archive/" + this.sha.sha + ".zip";
                console.log(this.url);
                this.sha = undefined;
            }
        })
        return this.url;
    }

}