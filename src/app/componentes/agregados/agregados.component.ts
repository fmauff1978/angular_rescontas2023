import { quocService } from './../../../quoc.service';
import { quoc} from './../../../quoc';
import { Component, OnInit } from '@angular/core';
import { agregados } from 'src/agregados';
import { agregadosService } from 'src/agregados.service';


@Component({
  selector: 'app-agregados',
  templateUrl: './agregados.component.html',
  styleUrls: ['./agregados.component.css'],
  providers: [agregadosService]
})
export class AgregadosComponent implements OnInit {

  agregados: agregados[]=[]
  paginaAtual: number =1;


  constructor(private service: agregadosService) { }

  ngOnInit(): void {

    this.service.getAgregados(this.paginaAtual).subscribe((agregados)=>{
      this.agregados = agregados
    });





  }

}
