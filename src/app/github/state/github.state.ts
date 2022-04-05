import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GithubState {

    projetos: BehaviorSubject<any> = new BehaviorSubject<any>([])
    branchs: BehaviorSubject<any> = new BehaviorSubject<any>([])
    user: BehaviorSubject<any> = new BehaviorSubject<any>(null)


    constructor() { }

    get projetosCollection(): any {
        return this.projetos.value;
    }

    get projetosCollection$() : any{
        return this.projetos;
    }

    set projetosCollection(value: any){
        this.projetos.next(value);
    }

    get userCollection(): any {
        return this.user.value;
    }

    get userCollection$() : any{
        return this.user;
    }

    set userCollection(value: any){
        this.user.next(value);
    }

    get branchsCollection(): any {
        return this.branchs.value;
    }

    get branchsCollection$() : any{
        return this.branchs;
    }

    set branchsCollection(value: any){
        this.branchs.next(value);
    }


}

