import { GithubService } from './../../github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: any = '';
  public respostas: any = '';

  constructor(public service: GithubService) { }

  ngOnInit(): void {
  }


  onUser(event: string){
    this.service.pesquisar(event).subscribe(res=>{
      this.user = res;
      console.log(res)
    });

    this.service.listar(event).subscribe(res=>{
      this.respostas = res;
      console.log(res)
    })



  }

  

  

}
