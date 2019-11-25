import { Component, OnInit } from '@angular/core';

declare function tabInit();

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styles: []
})
export class InventarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    tabInit();
  }

}
