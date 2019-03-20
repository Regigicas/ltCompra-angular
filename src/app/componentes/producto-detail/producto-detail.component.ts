import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlimentosService } from 'src/app/servicios/alimentos.service';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class ProductoDetailComponent implements OnInit
{
    idProducto;
    alimento;

    constructor(private params: ActivatedRoute,
        private alimentosService: AlimentosService)
    {
        this.idProducto = params.snapshot.paramMap.get("id");
        this.alimentosService.getAlimentoPorId(this.idProducto).subscribe((data: any) =>
        {
            this.alimento = data;
        });
    }

    ngOnInit() {}
}
