import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PuntoVentaComponent } from './punto-venta/punto-venta.component';
import { InventarioComponent } from './Productos/inventario/inventario.component';
import { FacturasComponent } from './facturas/facturas.component';
import { AlertaInventarioComponent } from '../components/alerta-inventario/alerta-inventario.component';
import { VentasGraficaComponent } from '../components/ventas-grafica/ventas-grafica.component';
import { VentasProgresoComponent } from '../components/ventas-progreso/ventas-progreso.component';
import { VentasEmpleadoComponent } from '../components/ventas-empleado/ventas-empleado.component';
import { AgendaProveedoresComponent } from '../components/agenda-proveedores/agenda-proveedores.component';
import { AdministrarProductoComponent } from './Productos/administrar-producto/administrar-producto.component';
import { AdministracionDashboardComponent } from './administracion/administracion-dashboard/administracion-dashboard.component';
import { AdministracionUsuariosComponent } from './administracion/administracion-usuarios/administracion-usuarios.component';
import { AdministracionImpresorasComponent } from './administracion/administracion-impresoras/administracion-impresoras.component';
// temporal


@NgModule({

    declarations: [
    DashboardComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PuntoVentaComponent,
    InventarioComponent,
    FacturasComponent,
    AlertaInventarioComponent,
    VentasGraficaComponent,
    VentasProgresoComponent,
    VentasEmpleadoComponent,
    AgendaProveedoresComponent,
    AdministrarProductoComponent,
    AdministracionDashboardComponent,
    AdministracionUsuariosComponent,
    AdministracionImpresorasComponent,

    ],
    exports: [
    DashboardComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]

})

export class PagesModule {
}