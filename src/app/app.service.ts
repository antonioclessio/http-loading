import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    static Loading: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private http: HttpClient) {}

    buscarCep(c: string): Observable<any> {
        return this.http.get(`https://viacep.com.br/ws/${c}/json/`);
    }

}