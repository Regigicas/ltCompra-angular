import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListadoCategoriasComponent } from './componentes/listado-categorias/listado-categorias.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ProductoDetailComponent } from './componentes/producto-detail/producto-detail.component';

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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
