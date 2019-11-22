import { Component, OnInit } from '@angular/core';

declare function dashboardGraficasInit();

@Component({
  selector: 'app-ventas-grafica',
  templateUrl: './ventas-grafica.component.html',
  styles: []
})
export class VentasGraficaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    dashboardGraficasInit();
  }

}
