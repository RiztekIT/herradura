import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard', icono: 'mdi mdi-plus' },
      ],
       url: '/dashboard',
    },
    {
      titulo: 'Punto de Venta',
      icono: 'mdi mdi-cart',
      submenu: [
        { titulo: 'Punto de Venta', url: '/punto-venta', icono: 'mdi mdi mdi-plus' },
      ],
       url: '/punto-venta',
    },
    {
      titulo: 'Inventario',
      icono: 'mdi mdi-view-list',
      submenu: [
        { titulo: 'Inventario', url: '/inventario', icono: 'mdi mdi mdi-plus' },
        { titulo: 'Administrar Productos', url: '/administrar-productos', icono: 'mdi mdi-playlist-check' },
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
        { titulo: 'Usuarios', url: '/administracion', icono: 'mdi mdi-account-plus' },
        { titulo: 'Impresoras', url: '/administracion', icono: 'mdi mdi-printer' },
      ],url: '/administracion',
    },
  ];

  constructor() { }
}
