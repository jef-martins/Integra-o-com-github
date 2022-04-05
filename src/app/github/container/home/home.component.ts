import { GithubFacade } from './../../github.facade';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public user: string = '';
  public pagina: number = 1;
  public filtro = new FormGroup({ nome: new FormControl(''), favoritos: new FormControl(false) });
  itensFiltrados: any = '';

  constructor(public facade: GithubFacade) { }

  ngOnInit() {
    const teste = this.facade.projetos$.subscribe(itens => {
      this.itensFiltrados = itens;
    });

    this.filtro.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(val => {
      this.facade.projetos$.pipe(
        tap(() => teste.unsubscribe())
      ).subscribe(itens => {
        this.itensFiltrados = itens.filter((item: any) => {
          const [data] = item.created_at.split('T');
          const teste = data.split('-');
          const dataFormatada = Intl.DateTimeFormat('pt-BR').format(new Date(teste[0], teste[1], teste[2]));
          console.log(val)
          return (item.name.toLowerCase().includes(val.nome.toLowerCase()) || dataFormatada.includes(val.nome)) && ((!!item.stargazers_count) == val.favoritos);
        });
      });
    });


  };

  onUser(event: string) {
    this.user = event;
    this.facade.getUser(this.user);
    this.onListar();
  }

  onListar() {
    this.facade.url1 = "https://github.com/" + this.user + "/";
    this.facade.url2 = "/archive/";
    this.facade.getRepo(this.user, this.pagina);
  }

  onProximo(event: number) {
    this.pagina = this.pagina + event;
    this.onListar();
  }

  onAnterior(event: number) {
    this.pagina = this.pagina - event;
    this.onListar();
  }

}


