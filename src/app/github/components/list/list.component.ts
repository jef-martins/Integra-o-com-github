import { GithubApi } from './../../api/github.api';
import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() itens: any;

  constructor(public api: GithubApi) { }

  ngOnInit(): void {
    
  }
}
