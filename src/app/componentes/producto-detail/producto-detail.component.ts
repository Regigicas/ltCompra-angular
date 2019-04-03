import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlimentosService } from 'src/app/servicios/alimentos.service';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class ProductoDetailComponent implements OnInit
{
    idProducto;
    alimento;
    showRegistered = false;
    showExists = false;

    constructor(private params: ActivatedRoute,
        private alimentosService: AlimentosService,
        private carritoService: CarritoService)
    {
        this.carritoService.initIfEmpty();
        this.idProducto = params.snapshot.paramMap.get("id");
        this.alimentosService.getAlimentoPorId(this.idProducto).subscribe((data: any) =>
        {
            this.alimento = data;
            this.showExists = this.carritoService.productoExists(this.alimento.id);
        });
    }

    ngOnInit() {}

    addACarrito()
    {
        if (this.carritoService.addProducto(this.alimento))
            this.showRegistered = true;

        this.showExists = true;
    }
}
