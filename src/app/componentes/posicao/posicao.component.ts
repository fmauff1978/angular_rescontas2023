import { posicaoService } from './../../../posicao.service';
import { Component, OnInit } from '@angular/core';
import { posicao } from 'src/posicao';

@Component({
  selector: 'app-posicao',
  templateUrl: './posicao.component.html',
  styleUrls: ['./posicao.component.css'],
  providers:[posicaoService]
})
export class PosicaoComponent implements OnInit {

  posicao: posicao[]=[]

  constructor(private service: posicaoService) { }

  ngOnInit(): void {

    this.service.getPosicao().subscribe((posicao)=>{

      this.posicao = posicao

      console.log(posicao);
    })
  }

}
