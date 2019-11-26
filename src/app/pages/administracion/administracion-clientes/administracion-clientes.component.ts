import { Component, OnInit } from '@angular/core';
declare function adminProdInit();
@Component({
  selector: 'app-administracion-clientes',
  templateUrl: './administracion-clientes.component.html',
  styles: []
})
export class AdministracionClientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adminProdInit();
  }

}
