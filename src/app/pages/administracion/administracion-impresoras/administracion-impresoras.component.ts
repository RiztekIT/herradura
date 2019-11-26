import { Component, OnInit } from '@angular/core';
declare function adminProdInit();

@Component({
  selector: 'app-administracion-impresoras',
  templateUrl: './administracion-impresoras.component.html',
  styles: []
})
export class AdministracionImpresorasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    adminProdInit();
  }

}
