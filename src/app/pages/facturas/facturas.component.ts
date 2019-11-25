import { Component, OnInit } from '@angular/core';

declare function imprimir();

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styles: []
})
export class FacturasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    imprimir();
  }

}
