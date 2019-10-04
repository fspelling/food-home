import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-detalhe.page.html',
  styleUrls: ['./receita-detalhe.page.scss'],
})
export class ReceitaDetalhePage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('ReceitaDetalhePage - ngOnInit');
  }

  ionViewWillEnter(){
    console.log('ReceitaDetalhePage - ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ReceitaDetalhePage - ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ReceitaDetalhePage - ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ReceitaDetalhePage - ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('ReceitaDetalhePage - ngOnDestroy');
  }
}
