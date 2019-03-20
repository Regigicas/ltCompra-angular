import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class CarritoComponent implements OnInit
{
    carrito;

    constructor(private carritoService: CarritoService)
    {
        this.carritoService.obtenerCarrito().subscribe((data: any) =>
        {
            this.carrito = data;
        });
    }

    ngOnInit() {}

    borrarTodo()
    {
        this.carrito = [];
        //this.carritoService.borrarProductos();
    }

    borrarProducto(producto)
    {
        var index = this.carrito.indexOf(producto);
        if (index !== -1)
        {
            this.carrito.splice(index, 1);
            //this.carritoService.borrarProducto(producto.id);
        }
    }
}
