import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GithubState {

    projetos: BehaviorSubject<any> = new BehaviorSubject<any>(null)
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

    set usersCollection(value: any){
        this.user.next(value);
    }
}

