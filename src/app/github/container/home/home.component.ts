import { GithubFacade } from './../../github.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public facade: GithubFacade) { }

  ngOnInit(): void {

  }


  onUser(event: string){
    this.facade.getUser(event);
    this.facade.getRepo(event);
  }

  

  

}
