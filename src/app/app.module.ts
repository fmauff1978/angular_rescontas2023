import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ContasComponent } from './componentes/contas/contas.component';
import { PosicaoComponent } from './componentes/posicao/posicao.component';
import { AgregadosComponent } from './componentes/agregados/agregados.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuocComponent } from './componentes/quoc/quoc.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ContasComponent,
    PosicaoComponent,
    AgregadosComponent,
    QuocComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, NgxPaginationModule
  ],
  providers: [{provide: LOCALE_ID,useValue:'pt'},{ provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
