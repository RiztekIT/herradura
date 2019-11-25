import { Component, OnInit } from '@angular/core';
declare function adminProdInit();

@Component({
  selector: 'app-administrar-producto',
  templateUrl: './administrar-producto.component.html',
  styles: []
})
export class AdministrarProductoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adminProdInit();
  }

}
