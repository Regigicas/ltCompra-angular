import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../servicios/categorias.service';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class ListadoCategoriasComponent implements OnInit
{
    categorias = [];

    constructor(private categoriasService: CategoriasService)
    {
        this.categoriasService.obtenerCategorias().subscribe(
            (data: any) =>
            {
                this.categorias = data;
            }
        )
    }

    ngOnInit() {}
}
