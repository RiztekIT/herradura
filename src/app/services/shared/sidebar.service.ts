import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Tablero',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Tablero Principal', url: '/dashboard', icono: 'mdi mdi-plus' },
      ],
       url: '/dashboard',
    },
    {
      titulo: 'Punto de Venta',
      icono: 'mdi mdi-cart',
      submenu: [
        { titulo: 'Punto de Venta', url: '/punto-venta', icono: 'mdi mdi mdi-arrow-right-bold' },
      ],
       url: '/punto-venta',
    },
    {
      titulo: 'Inventario',
      icono: 'mdi mdi-view-list',
      submenu: [
        { titulo: 'Inventario', url: '/inventario', icono: 'mdi mdi mdi-arrow-right-bold' },
        { titulo: 'Compras', url: '/compras', icono: 'mdi mdi-playlist-check' },
      ], url: '/inventario',
    },
    {
      titulo: 'Facturas',
      icono: 'mdi mdi-file-document-box',
      submenu: [
        { titulo: 'Facturas', url: '/facturas', icono: 'mdi mdi-file-document-box' },
      ],url: '/facturas',
    },
    {
      titulo: 'Administracion',
      icono: 'mdi mdi-account-settings-variant',
      submenu: [
        { titulo: 'Catalogos', url: '/administrar-catalogos', icono: 'mdi mdi-account-plus' },
      ],url: '/administrar-catalogos',
    },
  ];

  constructor() { }
}
