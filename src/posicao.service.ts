import { posicao } from './posicao';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class posicaoService {

  private readonly API = 'http://localhost:3000/posicao'


  constructor(private http:HttpClient) { }

  getPosicao():Observable<posicao[]>{

    return this.http.get<posicao[]>(this.API)
   

  }





}


