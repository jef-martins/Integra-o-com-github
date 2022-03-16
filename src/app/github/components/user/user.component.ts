import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  pesquisaUser: string = 'jef-martins';
  url = 'https://api.github.com/users/';
  resposta: any;
  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  pesquisar(){
    this.onSubmit.emit(this.pesquisaUser);
  }

}
