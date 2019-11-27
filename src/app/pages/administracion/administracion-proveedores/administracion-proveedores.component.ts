import { Component, OnInit } from '@angular/core';
declare function adminProdInit();
@Component({
  selector: 'app-administracion-proveedores',
  templateUrl: './administracion-proveedores.component.html',
  styles: []
})
export class AdministracionProveedoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adminProdInit();
  }

}
