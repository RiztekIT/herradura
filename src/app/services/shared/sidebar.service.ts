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
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Punto de Venta', url: '/punto-venta', icono: 'mdi mdi-plus' },
      ],
       url: '/punto-venta',
    },
    {
      titulo: 'Inventario',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Inventario', url: '/inventario', icono: 'mdi mdi-plus' },
        { titulo: 'Administrar Productos', url: '/administrar-productos', icono: 'mdi mdi-plus' },
      ], url: '/inventario',
    },
    {
      titulo: 'Facturas',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Facturas', url: '/facturas', icono: 'mdi mdi-plus' },
      ],url: '/facturas',
    },
    {
      titulo: 'Administracion',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Administracion', url: '/administracion', icono: 'mdi mdi-plus' },
      ],url: '/administracion',
    },
  ];

  constructor() { }
}
