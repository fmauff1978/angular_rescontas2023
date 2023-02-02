
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { agregados } from './agregados';




@Injectable({
  providedIn: 'root'
})
export class agregadosService {

  private readonly API = 'http://localhost:3000/agregados'


  constructor(private http:HttpClient) { }

  getAgregados(pagina :number):Observable<agregados[]>{

    const itensPorPagina = 6;

    let params = new HttpParams().set("_page", pagina).set("_limit", itensPorPagina)

    return this.http.get<agregados[]>(this.API, { params })

   // return this.http.get<agregados[]>(this.API)}

}
}
