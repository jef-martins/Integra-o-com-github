import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})

export class PaginacaoComponent implements OnInit {

  public dados=[];
  pag: number =0;

  @Output() onProximo = new EventEmitter<number>();
  @Output() onAnterior = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  proximo(){
    this.onProximo.emit(1);
  }
  
  anterior(){
    this.onAnterior.emit(1)
  }

}
