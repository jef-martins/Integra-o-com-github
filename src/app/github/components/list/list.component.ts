import { GithubApi } from './../../api/github.api';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() itens:any;
  itensAdapted: any = []

  constructor(public api: GithubApi) { }

  ngOnInit(): void {
    this.itens?.subscribe(async (itens:any)=>{
      if(!itens)return;

      for await (let item of itens) {
        item.owner.login, item.name, item.commits_url
        const commit = item.commits_url.split("{");
        const sha:any = await lastValueFrom(this.api.getUrl(commit[0]));
        const url = "https://github.com/" + item.owner.login + "/" + item.name + "/archive/" + sha[0].sha + ".zip"
        
        this.itensAdapted.push({
          ...item,
          download_url_adpted: url
        })
      };
    });

  }



}
