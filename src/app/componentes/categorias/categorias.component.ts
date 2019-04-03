import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlimentosService } from 'src/app/servicios/alimentos.service';
import { CategoriasService } from 'src/app/servicios/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class CategoriasComponent implements OnInit
{
    idCategoria;
    categoria;
    alimentos;
    
    constructor(private params: ActivatedRoute,
        private alimentosService: AlimentosService,
        private categoriasService: CategoriasService)
    {
        this.idCategoria = params.snapshot.paramMap.get("id");
        this.categoriasService.obtenerCategoriaPorId(this.idCategoria).subscribe((data) =>
        {
            this.categoria = data;
        });
        this.alimentosService.getAlimentosPorCategoria(this.idCategoria).subscribe((data) =>
        {
            this.alimentos = data;
        });
    }

    ngOnInit() {}
}
