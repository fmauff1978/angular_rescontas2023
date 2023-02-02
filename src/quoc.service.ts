
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { agregados } from './agregados';
import { quoc } from './quoc';




@Injectable({
  providedIn: 'root'
})
export class quocService {

  private readonly API = 'http://localhost:3000/quocientes'


  constructor(private http:HttpClient) { }

  getQuocientes():Observable<quoc[]>{

    return this.http.get<quoc[]>(this.API)}

}
