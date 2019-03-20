import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListadoCategoriasComponent } from './componentes/listado-categorias/listado-categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaDetailComponent } from './componentes/categoria-detail/categoria-detail.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ProductoCategoriaComponent } from './componentes/producto-categoria/producto-categoria.component';
import { ProductoDetailComponent } from './componentes/producto-detail/producto-detail.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { AlergenoComponent } from './componentes/alergeno/alergeno.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListadoCategoriasComponent,
    CategoriaDetailComponent,
    CategoriasComponent,
    ProductoCategoriaComponent,
    ProductoDetailComponent,
    CabeceraComponent,
    AlergenoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
