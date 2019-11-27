import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { FacturasComponent } from './facturas/facturas.component';
import { InventarioComponent } from './Productos/inventario/inventario.component';
import { PuntoVentaComponent } from './punto-venta/punto-venta.component';
import { AdministrarProductoComponent } from './Productos/administrar-producto/administrar-producto.component';
import { AdministracionImpresorasComponent } from './administracion/administracion-impresoras/administracion-impresoras.component';
import { AdministracionUsuariosComponent } from './administracion/administracion-usuarios/administracion-usuarios.component';
import { AdministracionDashboardComponent } from './administracion/administracion-dashboard/administracion-dashboard.component';
import { CatalogosComponent } from './administracion/catalogos/catalogos.component';
import { ComprasComponent } from './productos/compras/compras.component';





const pagesRoutes: Routes = [

    {
        path: '',
        component: PagesComponent,

        children: [

            { path: 'dashboard', component: DashboardComponent },
            { path: 'account-settings', component: AccountSettingsComponent },
            { path: 'administracion-dashboard', component: AdministracionDashboardComponent },
            { path: 'facturas', component: FacturasComponent },
            { path: 'inventario', component: InventarioComponent },
            { path: 'punto-venta', component: PuntoVentaComponent },
            { path: 'administrar-productos', component: AdministrarProductoComponent },
            { path: 'administrar-impresoras', component: AdministracionImpresorasComponent },
            { path: 'administrar-usuarios', component: AdministracionUsuariosComponent },
            { path: 'administrar-catalogos', component: CatalogosComponent },
            { path: 'compras', component: ComprasComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: '', redirectTo: '/login', pathMatch: 'full' }


        ]
    }

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);