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
        this.idProducto = params.snapshot.paramMap.get("id");
        this.alimentosService.getAlimentoPorId(this.idProducto).subscribe((data: any) =>
        {
            this.alimento = data;
            this.carritoService.tryGetProducto(this.alimento.codBarras).then((res) =>
            {
                this.showExists = res != null;
            }).catch((err) =>
            {
                this.showExists = false;
            });
        });
    }

    ngOnInit() {}

    addACarrito()
    {
        this.carritoService.addProducto(this.alimento.codBarras).then((res) =>
        {
            this.showRegistered = res;
        });

        this.showExists = true;
    }
}
