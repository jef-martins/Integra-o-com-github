import { GithubFacade } from './../../github.facade';
import { GithubApi } from '../../api/github.api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: string = '';
  public respostas: any = '';

  constructor(public facade: GithubFacade) { }

  ngOnInit(): void {
    
  }


  onUser(event: string){
    this.facade.getUser(event);
  }

  

  

}
