import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 download_url = ""

 @Input() itens:any = [];

  constructor(public service: GithubService) { }

  ngOnInit(): void {
  }

  formatarUrl(commitUrl: string){
    const commit = commitUrl.split("{")
    return commit[0];
  }

   async prepararDownload(user: string, projeto: string, commitUrl: string){
    const sha: any= await lastValueFrom(this.service.getUrl(this.formatarUrl(commitUrl)));
     console.log(sha[0]);
     return this.download_url = "https://github.com/"+ user +"/"+ projeto +"/archive/"+ sha[0].sha +".zip"
   }

}
