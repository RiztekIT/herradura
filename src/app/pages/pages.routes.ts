import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { FacturasComponent } from './facturas/facturas.component';
import { InventarioComponent } from './Productos/inventario/inventario.component';
import { PuntoVentaComponent } from './punto-venta/punto-venta.component';
import { AdministrarProductoComponent } from './Productos/administrar-producto/administrar-producto.component';




const pagesRoutes: Routes = [

    {
        path: '',
        component: PagesComponent,

        children: [

            { path: 'dashboard', component: DashboardComponent },
            { path: 'account-settings', component: AccountSettingsComponent },
            { path: 'administracion', component: AdministracionComponent },
            { path: 'facturas', component: FacturasComponent },
            { path: 'inventario', component: InventarioComponent },
            { path: 'punto-venta', component: PuntoVentaComponent },
            { path: 'administrar-productos', component: AdministrarProductoComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

        ]
    }

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);