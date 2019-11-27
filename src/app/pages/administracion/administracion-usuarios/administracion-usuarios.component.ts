import { Component, OnInit } from '@angular/core';
declare function adminProdInit();

@Component({
  selector: 'app-administracion-usuarios',
  templateUrl: './administracion-usuarios.component.html',
  styles: []
})
export class AdministracionUsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adminProdInit();
  }

}
