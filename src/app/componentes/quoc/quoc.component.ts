import { quocService } from './../../../quoc.service';
import { Component, OnInit } from '@angular/core';
import { quoc } from 'src/quoc';

@Component({
  selector: 'app-quoc',
  templateUrl: './quoc.component.html',
  styleUrls: ['./quoc.component.css'],
  providers:[quocService]
})
export class QuocComponent implements OnInit {

  quoc : quoc[] = []


  constructor(private service: quocService) { }

  ngOnInit(): void {
    this.service.getQuocientes().subscribe((quoc)=>{
      this.quoc = quoc
    });



  }

}



