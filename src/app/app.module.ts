import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { BottomComponent } from './componentes/bottom/bottom.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { AlimentoCarritoComponent } from './componentes/alimento-carrito/alimento-carrito.component';
import { CodigoBarrasManualComponent } from './componentes/codigo-barras-manual/codigo-barras-manual.component';
import { CodigoBarrasComponent } from './componentes/codigo-barras/codigo-barras.component';
import { RegistroProductoComponent } from './componentes/registro-producto/registro-producto.component';

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
    AlergenoComponent,
    BottomComponent,
    CarritoComponent,
    AlimentoCarritoComponent,
    CodigoBarrasManualComponent,
    CodigoBarrasComponent,
    RegistroProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
