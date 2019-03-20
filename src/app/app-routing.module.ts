import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListadoCategoriasComponent } from './componentes/listado-categorias/listado-categorias.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ProductoDetailComponent } from './componentes/producto-detail/producto-detail.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CodigoBarrasManualComponent } from './componentes/codigo-barras-manual/codigo-barras-manual.component';
import { CodigoBarrasComponent } from './componentes/codigo-barras/codigo-barras.component';
import { RegistroProductoComponent } from './componentes/registro-producto/registro-producto.component';

const routes: Routes =
[
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "listado-categorias",
        component: ListadoCategoriasComponent
    },
    {
        path: "categorias/:id",
        component: CategoriasComponent
    },
    {
        path: "producto-detail/:id",
        component: ProductoDetailComponent
    },
    {
        path: "carrito",
        component: CarritoComponent
    },
    {
        path: "codigo-manual",
        component: CodigoBarrasManualComponent
    },
    {
        path: "codigo",
        component: CodigoBarrasComponent
    },
    {
        path: "registrar",
        component: RegistroProductoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
